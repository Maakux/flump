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
		$files['data'] = [];

		if (array_key_exists('file', $uploadedFiles))
		{
			$uploadedFiles = $uploadedFiles['file'];
		}
		
		foreach ($uploadedFiles as $tmp)
		{
			$file = static::create([
				'original_name' => $tmp->getClientOriginalName(),
				'extension' => $tmp->getClientOriginalExtension(),
				'mime_type' => $tmp->getMimeType(),
				'size' => $tmp->getClientSize(),
				'expire_date' => Carbon::now()->addDay()
			]);

			$extension = $file->extension === '' ? '' : '.' . $file->extension;

			$file->hash = substr(sha1($file->id), 0, 7);
			$file->name = $file->hash . $extension;
			$file->save();

			Storage::put($file->name, file_get_contents($tmp));

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
		return $query->where('hash', '=', $hash)->firstOrFail();
	}
}