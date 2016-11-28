package mk.ukim.finki.wp.web;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.http.HttpSessionAttributeListener;
import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

/**
 * Created by Bojan on 11/21/2016.
 */
public class PizzaListener implements ServletContextListener, HttpSessionListener, HttpSessionAttributeListener {
    public PizzaListener() {
    }

    public void contextInitialized(ServletContextEvent servletContextEvent) {
        System.out.println("[WP-Log] {contextInitialized}");
    }

    public void contextDestroyed(ServletContextEvent servletContextEvent) {
        System.out.println("[WP-Log] {" + servletContextEvent.toString() +"}");
    }

    public void attributeAdded(HttpSessionBindingEvent httpSessionBindingEvent) {
        System.out.println("[WP-Log] {contextDestroyed}");
    }

    public void attributeRemoved(HttpSessionBindingEvent httpSessionBindingEvent) {
        System.out.println("[WP-Log] {" + httpSessionBindingEvent.toString() +"}");
    }

    public void attributeReplaced(HttpSessionBindingEvent httpSessionBindingEvent) {
        System.out.println("[WP-Log] {attributeRemoved}");
    }

    public void sessionCreated(HttpSessionEvent httpSessionEvent) {
        System.out.println("[WP-Log] {sessionCreated}");
    }

    public void sessionDestroyed(HttpSessionEvent httpSessionEvent) {
        System.out.println("[WP-Log] {sessionDestroyed}");
    }
}
