<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
	protected $fillable = [
		'name',
		'original_name',
		'path',
		'type',
		'size',
		'expire_date'
	];
}