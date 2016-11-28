<%--
  Created by IntelliJ IDEA.
  User: Bojan
  Date: 11/28/2016
  Time: 7:11 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Customer Info</title>
</head>
<body>
    <h1> Customer Information </h1>
    <form method="POST" action="/placeOrder">
        <label> Name:</label> <input type="text" name="clientName"> <br>
        <label> Address:</label> <input type="text" name="clientAddress"> <br>
        <input type="submit" value="submit">
    </form>
</body>
</html>
