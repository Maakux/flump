<?php

namespace App\Http\Controllers;

use Storage;
use App\File;
use App\Http\Requests;
use App\Traits\Responsible;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FileController extends Controller
{
	use Responsible;

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
		$files = File::upload($this->request->allfiles());

		return $this->respondWithCreated($files);
	}

	/**
	 * Get the file by the given short name.
	 *
	 * @param string $file
	 * @return \Illuminate\Http\Response
	 */
	public function getFile($file)
	{
		$file = File::findByHash($file);

		return $this->respond($file->toArray());
	}

	/**
	 * Download the file.
	 *
	 * @param string $file
	 * @return \Illuminate\Http\Response
	 */
	public function postDownloadFile($file)
	{
		$file = File::findByHash($file);

		return $this->respondWithDownload($file->toArray());
	}
}
