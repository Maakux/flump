<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class File extends Model
{
	protected $fillable = [
		'name',
		'original_name',
		'extension',
		'mime_type',
		'size',
		'expire_date'
	];

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