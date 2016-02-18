<html lang="en">
	<head>
		<meta charset="utf-8"/>
		<meta name="csrf-token" content="{{ csrf_token() }}">
		<title>flump - no files here friend :)</title>
		<link rel="stylesheet" type="text/css" href="{{ URL::to('css/flump.css') }}"/>
		<link rel="stylesheet" type="text/css" href="{{ URL::to('css/fonts.css') }}"/>
	</head>
	<body>
		<div class="http-error fadeInUp">
			<i class="icon-file"></i>
			<div class="message">no files here friend :)</div>
		</div>
	</body>
</html>
