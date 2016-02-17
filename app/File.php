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
		'hash',
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
	public static function upload(array $uploadedFiles)
	{
		$files = [];

		foreach ($uploadedFiles["file"] as $tmp)
		{
			$file = static::create([
				'name' => $tmp->getClientOriginalName(),
				'extension' => $tmp->getClientOriginalExtension(),
				'mime_type' => $tmp->getMimeType(),
				'size' => $tmp->getClientSize(),
				'expire_date' => Carbon::now()->addDay()
			]);

			$file->hash = sha1($file->id);
			$file->short_hash = substr($file->hash, 0, 7);
			$file->save();

			Storage::disk('local')->put(
				'files/' . $file->hash . '.' . $file->extension,
				file_get_contents($tmp)
			);

			$files['data'][] = $file;
		}

		return $files;
	}

	/**
	 * Find a file by its name.
	 *
	 * @param Builder $query
	 * @param string $name
	 * @return \App\File
	 */
	public function scopeFindByHash($query, $hash)
	{
		return $query->where('short_hash', '=', $hash)->firstOrFail();
	}
}