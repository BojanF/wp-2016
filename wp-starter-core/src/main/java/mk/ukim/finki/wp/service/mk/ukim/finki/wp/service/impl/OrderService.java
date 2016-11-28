package mk.ukim.finki.wp.service.mk.ukim.finki.wp.service.impl;

import mk.ukim.finki.wp.model.Order;
import mk.ukim.finki.wp.service.IOrderService;
import org.springframework.stereotype.Service;

import java.util.Random;

/**
 * Created by 135029 on 11/22/2016.
 */
@Service
public class OrderService implements IOrderService {
    public Order placeOrder(String pizzaType, String clientName, String address){
        Random r=new Random();
        Order ord = new Order(pizzaType, clientName, address,  r.nextInt());
        System.out.println(ord.getOrderId());
        return ord;
    }
}
