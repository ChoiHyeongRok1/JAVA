<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>삭제할 글 확인</title>
</head>
<body>
	
	<!-- 삭제할 글을 화면에 보여주고 비밀번호를 입력받아 실제로 글을 삭제하는 페이지로 넘겨준다. -->
	<fmt:requestEncoding value="UTF-8"/>
	
	<form action="deleteOK.jsp" method="post">
		<table width="600" align="center" border="1" cellpadding="5" cellspacing="0">
			<tr>
				<th colspan="2">삭제할 글 확인</th>
			</tr>
			<tr>
				<th width="100">이름</th>
				<td width="500">
					<c:set var="name" value="${fn:replace(vo.name, '<', '&lt;')}"/>
					<c:set var="name" value="${fn:replace(name, '>', '&gt;')}"/>
					${name}
				</td>
			</tr>
			<tr>
				<th>작성일</th>
				<td>
					<fmt:formatDate value="${vo.writeDate}" pattern="yyyy.MM.dd(E) a hh:mm"/>
				</td>
			</tr>
			<tr>
				<th>메모</th>
				<td>
					<c:set var="memo" value="${fn:replace(vo.memo, '<', '&lt;')}"/>
					<c:set var="memo" value="${fn:replace(memo, '>', '&gt;')}"/>
					<c:set var="memo" value="${fn:replace(memo, enter, '<br/>')}"/>
					${memo}
				</td>
			</tr>
			<tr>
				<td colspan="2" align="center">
					<label>
						비밀번호 <input type="password" name="password">
					</label>
					<input type="submit" value="삭제하기">
					<input type="reset" value="다시쓰기">
					<input type="button" value="돌아가기" onclick="history.back()">
				</td>
			</tr>
		</table>
		
		<input type="hidden" name="idx" value="${vo.idx}">
		<input type="hidden" name="currentPage" value="${currentPage}">
	</form>
	
</body>
</html>































