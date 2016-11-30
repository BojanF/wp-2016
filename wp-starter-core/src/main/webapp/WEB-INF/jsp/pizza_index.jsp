<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.List" %><%--
  Created by IntelliJ IDEA.
  User: Bojan
  Date: 11/28/2016
  Time: 6:43 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<% List<String> golemini = (ArrayList<String>)request.getAttribute("golemini"); %>
<html>
<head>
    <title>MVC</title>
</head>
<body>
    <h1> Chose pizza size </h1>
    <form action="/ShowClientInfo" method="POST">
        <%
            for (String st:golemini) {
                out.write("<input type=\"radio\" name=\"size\" value=\""+st+"\"> "+ st +"<br>");
            }
        %>
        <input type="submit" value="submit">
    </form>
</body>
</html>
