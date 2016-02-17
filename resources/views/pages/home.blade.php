<html lang="en">
	<head>
		<meta charset="utf-8"/>
		<meta name="csrf-token" content="{{ csrf_token() }}">
		<title>flump - simple temporary file storage</title>
		<link rel="stylesheet" type="text/css" href="{{ URL::to('css/flump.css') }}"/>
		<link rel="stylesheet" type="text/css" href="{{ URL::to('css/fonts.css') }}">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	</head>
	<body>
		<div id="app-root"></div>
	</body>
	<footer>
		<script type="text/javascript" src="{{ URL::to('js/app.js') }}"></script>
	</footer>
</html>