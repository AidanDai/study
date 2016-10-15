<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>原理篇-Corss site Scripting(XSS)</title>
</head>
<body>
	<form action="" method="get">
		<input type='text' name="xss"/>
		<button type="submit">Submit</button>
	</form>
	<?php
		if(!empty($_GET["xss"])){
			$xss = $_GET["xss"];
			echo("你输入的字符为：".$xss);
		}
	?>
</body>
</html>