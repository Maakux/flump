<?php

namespace App\Traits;

trait Responsible
{
	/**
	 * Respond with a 200 OK HTTP status code.
	 *
	 * @param array $data
	 * @param array $headers
	 * @return \Illuminate\Http\Response
	 */
	public function respond(array $data, array $headers = [])
	{
		$data['http_code'] = 200;

		return response()->json($data, 200, $headers);
	}

	/**
	 * Respond with a 201 Created HTTP status code.
	 *
	 * @param array $data
	 * @param array $headers
	 * @return \Illuminate\Http\Reponse
	 */
	public function respondWithCreated(array $data, array $headers = [])
	{
		$data['http_code'] = 201;

		return response()->json($data, 201, $headers);
	}

	public function respondWithDownload(array $data, array $headers = [])
	{
		$data['http_code'] = 204;

		return response()->download(storage_path('app/files/') . $data['name']);
	}

	/**
	 * Respond with a 404 Not Found HTTP status code.
	 *
	 * @param array $message
	 * @param array $headers
	 * @return \Illuminate\Http\Response
	 */
	public function respondWithNotFound(array $message, array $headers = [])
	{
		$message['http_code'] = 404;

		return response()->json($message, 404, $headers);
	}
}
