<%@page import="com.tjoeun.vo.CategoryVO"%>
<%@page import="com.tjoeun.service.CategoryService"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
	request.setCharacterEncoding("UTF-8");
%>

	<jsp:useBean id="vo" class="com.tjoeun.vo.CategoryVO">
		<jsp:setProperty property="*" name="vo"/>
	</jsp:useBean>
	
<%


 	CategoryService service = CategoryService.getInstance();
	CategoryVO original = service.selectByIdx(vo.getIdx());
	
	service.update(vo);
	
	out.println("<script>");
	out.println("alert('" + original.getCategory() + "카테고리를 "+ vo.getCategory() + " 카테고리로 수정완료')");
	out.println("location.href='list.jsp'");
	out.println("</script>");
%>
</body>
</html>

























