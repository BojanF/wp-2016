package mk.ukim.finki.wp.service.mk.ukim.finki.wp.service.impl;

import mk.ukim.finki.wp.service.IPizzaService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by 135029 on 11/22/2016.
 */
@Service
public class PizzaService implements IPizzaService {

    public List<String> getPizzaTypes(){
        List<String> lista = new ArrayList<String>();
        lista.add("Small");
        lista.add("Medium");
        lista.add("Large");
        return lista;
    }

}
