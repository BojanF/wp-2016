<%--
  Created by IntelliJ IDEA.
  User: Bojan
  Date: 11/21/2016
  Time: 8:58 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Information</title>
</head>
<body>
    <h1> Delivery Information </h1>
    <form method="POST" action="AddresInfo.do">
        <label> Name:</label> <input type="text" name="ime"> <br>
        <label> Address:</label> <input type="text" name="adresa"> <br>
        <input type="submit" value="submit">
    </form>
</body>
</html>
