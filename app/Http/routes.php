<?php

Route::get('/', 'PagesController@getHome');

Route::post('/api/files', 'FileController@postUploadFile');
Route::get('/api/files/{file}', 'FileController@getFile');

Route::get('{any}', 'PagesController@getHome')->where('any', '.*');