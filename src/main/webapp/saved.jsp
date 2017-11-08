<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div>
		<div>
			<span>Thanks for submitting, ${userName}!</span>
		</div>
		<form action="Hello" method="GET">
			<button type="submit">Return to Home</button>
		</form>
	</div>
</body>
</html>