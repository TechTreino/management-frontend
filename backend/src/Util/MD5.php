<?php

namespace AcademiaDigital\Util;

class MD5
{
	protected function __construct(){}

	public static function hash($value)
	{
		return md5($value);
	}
}