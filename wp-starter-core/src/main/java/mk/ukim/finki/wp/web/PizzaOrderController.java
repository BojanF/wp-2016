package mk.ukim.finki.wp.web;

import mk.ukim.finki.wp.model.Order;
import mk.ukim.finki.wp.service.mk.ukim.finki.wp.service.impl.OrderService;
import mk.ukim.finki.wp.service.mk.ukim.finki.wp.service.impl.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * Created by Bojan on 11/28/2016.
 */
@Controller
public class PizzaOrderController {

    @Autowired
    private PizzaService pizzaService;
    @Autowired
    private OrderService orderService;

    @RequestMapping(method = RequestMethod.GET, value="/")
    public ModelAndView index(){
        List<String> pizzaSize = pizzaService.getPizzaTypes();
        ModelAndView mv = new ModelAndView();
        mv.addObject("golemini", pizzaSize);
        mv.setViewName("pizza_index");
        System.out.println(
                "       |\n"+
                "       |\n"+
                "       |\n"+
                "       |\n"+
                "       |\n"+
                pizzaSize.toString() +
                "    \n |\n"+
                "       |\n"+
                "       |\n"+
                "       |\n"+
                "       |\n"
        );
        return mv;
    }

    @RequestMapping(method = RequestMethod.POST, value="/showClientInfo")
    public ModelAndView showClientInfo(@RequestParam String size, HttpSession session){
        System.out.println("Vneseno golemina na pizza");
        ModelAndView mv = new ModelAndView();
        mv.setViewName("customer_info");
        session.setAttribute("size", size);
        return mv;
    }

    @RequestMapping(method = RequestMethod.POST, value="/placeOrder")
    public ModelAndView placeOrder(@RequestParam String clientName, @RequestParam String clientAddress, HttpSession session){
        System.out.println("Vneseno ime i adresa");
        ModelAndView mv = new ModelAndView();

        Order ord = orderService.placeOrder(session.getAttribute("size").toString(), clientName, clientAddress);
        System.out.println(ord.getOrderId());
        mv.addObject("order", ord);
        mv.setViewName("order");
        return mv;
    }
}
