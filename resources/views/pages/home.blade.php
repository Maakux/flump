<html lang="en">
	<head>
		<meta charset="utf-8"/>
		<meta name="csrf-token" content="{{ csrf_token() }}">
		<title>flump - simple temporary file storage</title>
		<link rel="stylesheet" type="text/css" href="{{ URL::to('css/flump.css') }}"/>
		<link rel="stylesheet" type="text/css" href="{{ URL::to('css/fonts.css') }}"/>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	</head>
	<body>
		<div id="app-root"></div>
	</body>
	<footer>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-74093027-1', 'auto');
  ga('send', 'pageview');
</script>
		<script type="text/javascript" src="{{ URL::to('js/app.js') }}"></script>
	</footer>
</html>
