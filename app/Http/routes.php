<?php

Route::group(['middleware' => 'web'], function() {
	Route::group(['domain' => 'f.flump.dev'], function() {
		Route::get('/{file}', 'FileController@getRawFile');
	});

	Route::get('/', 'PagesController@getHome');

	Route::post('/api/files', 'FileController@postUploadFile');
	Route::get('/api/files/{file}', 'FileController@getFile');
	Route::get('/files/{file}/download', 'FileController@postDownloadFile');

	Route::get('{any}', 'PagesController@getHome')->where('any', '.*');
});