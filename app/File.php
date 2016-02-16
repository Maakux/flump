<?php

namespace App;

use Storage;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class File extends Model
{
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'name',
		'original_name',
		'extension',
		'mime_type',
		'size',
		'expire_date'
	];

	/**
	 * Upload the file, and create a new record in the
	 * database.
	 *
	 * @param Uploaded $uploadedFile
	 * @return \App\File
	 */
	public static function upload(UploadedFile $uploadedFile)
	{
		$file = static::create([
			'original_name' => $uploadedFile->getClientOriginalName(),
			'extension' => $uploadedFile->getClientOriginalExtension(),
			'mime_type' => $uploadedFile->getMimeType(),
			'size' => $uploadedFile->getClientSize(),
			'expire_date' => Carbon::now()->addDay()
		]);

		$name = sha1($file->id);

		$file->name = substr($name, 0, 7);
		$file->save();

		Storage::disk('local')->put(
			'files/' . $file->name . '.' . $file->extension,
			file_get_contents($uploadedFile)
		);

		return $file;
	}

	/**
	 * Find a file by its name.
	 *
	 * @param Builder $query
	 * @param string $name
	 * @return \App\File
	 */
	public function scopeFindByName($query, $name)
	{
		return $query->where('name', '=', $name)->firstOrFail();
	}
}