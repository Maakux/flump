<?php

Route::get('/', 'PagesController@getHome');

Route::post('files', 'FileController@postUploadFile');