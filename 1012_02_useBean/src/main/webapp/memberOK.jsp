<%@page import="com.tjoeun.usebean.MemberVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<script type="text/javascript" src="./passwordCheck.js" defer="defer"></script>

</head>
<body>
<% 
	request.setCharacterEncoding("UTF-8");
//	member.jsp에서 넘어오는 데이터를 받는다.
	String id = request.getParameter("id");	
	String name = request.getParameter("name");
	String password = request.getParameter("password");
	int age = Integer.parseInt(request.getParameter("age"));
	boolean gender = Boolean.parseBoolean(request.getParameter("gender"));
	
//	getRemoteAddr() 메소드로 접속자 ip 주소를 얻어올 수 있다.
	String ip = request.getParameter("ip");
//	String ip = request.getRemoteAddr();
//	out.println(ip);
	
//	MemberVO 클래스 객체를 만들고 member.jsp에서 넘겨받은 데이터를 넣어준다.
	MemberVO vo = new MemberVO();
	vo.setId(id);
	vo.setName(name);
	vo.setPassword(password);
	vo.setAge(age);
	vo.setGender(gender);
	vo.setIp(ip);
	
	out.println(vo + "<br/>");
%>	
</body>
</html>
























