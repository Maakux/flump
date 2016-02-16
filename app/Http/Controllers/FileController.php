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
		$file = File::upload($this->request->file('file'));

		return response()->json($file->toArray());
	}
}
