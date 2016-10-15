<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>利用输出环境来构造代码-XSS攻击</title>
</head>
<body>
	<h4>把我们输入的字符串，输出到 input 里的 value 属性里</h4>
	<form action="" method="get">
		<label for="input">请输入你想现实的字符串：</label>
		<input id="input" type='text' name="xss" placeholder="输入"/>
		<button type="submit">Submit</button>
	</form>
	<hr/>
	<?php
		if(!empty($_GET["xss"])){
			$xss = $_GET["xss"];
			echo("<input type='text' value='$xss'>");
		}else{
			echo("<input type='text' placeholder='输出'>");
		}
	?>
</body>
</html>