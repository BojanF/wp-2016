<%@ page import="mk.ukim.finki.wp.model.Order" %><%--
  Created by IntelliJ IDEA.
  User: Bojan
  Date: 11/28/2016
  Time: 7:15 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<% Order ord = (Order) request.getAttribute("order"); %>
<html>
<head>
    <title>Order Details</title>
</head>
<body>
    <h1>Pizza Order Details</h1>
    <b>ID:</b> <label><% out.print(ord.getOrderId()); %></label><br>
    <b>Golemina:</b> <label><% out.print(ord.getPizzaType()); %></label><br>
    <b>Ime:</b> <label><% out.print(ord.getClientName()); %></label><br>
    <b>Adresa:</b> <label><%  out.print(ord.getClientAddress()); %></label><br>
</body>
</html>
