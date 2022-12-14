<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Commons DBCP 연결하기</title>
</head>
<body>

<%
//	lib 폴더에 commons-dbcp-1.4.jar, commons-pool-1.5.7.jar, mysql-connector-java-5.1.27-bin.jar 파일을 복사해 넣는다.
//	=> commonsDBCP 드라이버
//	scr/main/java에 *.jocl 파일을 작성한다. => 데이터베이스 연결 정보
//	oracle => <string value = "jdbc:oracle:thin:@localhost:1521:xe"/>
	Connection conn = null;
	try{
		
		// Class.forName("com.mysql.jdbc.Driver"); // mysql
		// Class.forName("org.apache.commons.dbcp.PoolingDriver"); // commonsDBCP
		Class.forName("oracle.jdbc.driver.OracleDriver"); // oracle
		Class.forName("org.apache.commons.dbcp.PoolingDriver"); // commonsDBCP
		// 데이터베이스 연결 정보가 저장된 파일(*.jocl)의 경로를 저장한다.
		String url = "jdbc:apache:commons:dbcp:/pool";
		conn = DriverManager.getConnection(url);
		
		out.println("연결성공: " + conn + "<br/>");
		
	} catch(ClassNotFoundException e){
		out.println("드라이버 클래스가 없거나 읽어올 수 없습니다.");
	} 
	/*catch(SQLException e){
		out.println("데이터베이스 접속 정보가 올바르지 않습니다.");
	}*/ 
	finally{
		if(conn != null){
			try{
				conn.close();
			}catch(SQLException e){
				
			}
		}
	}
%>

</body>
</html>
































