package mk.ukim.finki.wp.model;

/**
 * Created by 135029 on 11/22/2016.
 */
public class Order {
    public String pizzaType;
    public String clientName;
    public String clientAddress;
    public long orderId;

    public Order(String pizzaType, String clientName, String clientAddress, long orderId) {
        this.pizzaType = pizzaType;
        this.clientName = clientName;
        this.clientAddress = clientAddress;
        this.orderId = orderId;
    }

    public String getPizzaType() {
        return pizzaType;
    }

    public String getClientName() {
        return clientName;
    }

    public String getClientAddress() {
        return clientAddress;
    }

    public long getOrderId() {
        return orderId;
    }

    public void setPizzaType(String pizzaType) {
        this.pizzaType = pizzaType;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public void setClientAddress(String clientAddress) {
        this.clientAddress = clientAddress;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    @Override
    public String toString() {
        return "Order{" +
                "pizzaType='" + pizzaType + '\'' +
                ", clientName='" + clientName + '\'' +
                ", clientAddress='" + clientAddress + '\'' +
                ", orderId=" + orderId +
                '}';
    }
}
