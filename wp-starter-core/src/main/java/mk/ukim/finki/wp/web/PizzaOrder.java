package mk.ukim.finki.wp.web;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;

/**
 * Created by Bojan on 11/21/2016.
 */

public class PizzaOrder extends HttpServlet {


    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String size = req.getParameter("size");
        req.getSession().setAttribute("size", size);

        RequestDispatcher ds = req.getRequestDispatcher("deliveryInfo.jsp");
        ds.forward(req, resp);

    }
}
