<?php

namespace App\Http\Controllers;

use Storage;
use App\File;
use App\Http\Requests;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FileController extends Controller
{
	protected $request;

	public function __construct(Request $request)
	{
		$this->request = $request;
	}

	public function postUploadFile()
	{
		$file = File::create([
			'original_name' => $this->request->file('file')->getClientOriginalName(),
			'extension' => $this->request->file('file')->getClientOriginalExtension(),
			'mime_type' => $this->request->file('file')->getMimeType(),
			'size' => $this->request->file('file')->getClientSize()
		]);

		$file->name = sha1($file->id);
		$file->save();

		return response()->json($file->toArray());
	}
}
