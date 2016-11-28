package mk.ukim.finki.wp.service;

import mk.ukim.finki.wp.model.Order;

/**
 * Created by Bojan on 11/28/2016.
 */
public interface IOrderService {
    public Order placeOrder(String pizzaType, String clientName, String address);
}
