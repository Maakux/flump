<html lang="en">
	<head>
		<meta charset="utf-8"/>
		<meta name="csrf-token" content="{{ csrf_token() }}">
		<title>flump - flump is down for maintenance</title>
		<link rel="stylesheet" type="text/css" href="{{ URL::to('css/flump.css') }}"/>
		<link rel="stylesheet" type="text/css" href="{{ URL::to('css/fonts.css') }}">
	</head>
	<body>
		<div class="http-error">
			<i class="icon-settings"></i>
			<div class="message">oh no, flump is down!</div>
		</div>
	</body>
</html>