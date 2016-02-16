<?php

namespace App;

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
	 * @param Uploaded $file
	 * @return \App\File
	 */
	public static function upload(UploadedFile $file)
	{
		$file = static::create([
			'original_name' => $file->getClientOriginalName(),
			'extension' => $file->getClientOriginalExtension(),
			'mime_type' => $file->getMimeType(),
			'size' => $file->getClientSize(),
			'expire_date' => Carbon::now()->addDay()
		]);

		$file->name = sha1($file->id);
		$file->save();

		return $file;
	}
}