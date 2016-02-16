<?php

Route::get('/', 'PagesController@getHome');

Route::post('files', 'FileController@postUploadFile');
Route::get('files/{file}', 'FileController@getFile');

Route::get('{any}', 'PagesController@getHome')->where('any', '*');