<?php

namespace App\Http\Controllers;

use Storage;
use App\File;
use App\Http\Requests;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FileController extends Controller
{

	/**
	 * The current request.
	 *
	 * @var Request
	 */
	protected $request;

	/**
	 * Setup controller's dependencies.
	 *
	 * @param Request $request
	 * @return void
	 */
	public function __construct(Request $request)
	{
		$this->request = $request;
	}

	/**
	 * Upload a new file.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function postUploadFile()
	{
		$file = File::upload($this->request->file('file'));

		return response()->json($file->toArray());
	}
}
