package mk.ukim.finki.wp.web.rest;

import mk.ukim.finki.wp.model.Professor;
import mk.ukim.finki.wp.service.IProfessorService;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by Bojan on 7/8/2017.
 */
@RestController
@RequestMapping(value = "/api/professors", produces = "application/json")
public class ProfessorController implements ApplicationContextAware {


    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        IProfessorService bean = applicationContext.getBean(IProfessorService.class);
        System.out.println(bean);
    }

    private IProfessorService professorService;

    @Autowired
    public ProfessorController(IProfessorService professorService) {
        this.professorService = professorService;
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Professor save(@Valid @RequestBody Professor professor) {
        return professorService.insert(professor);
    }

    @RequestMapping(value = "", method = RequestMethod.PUT)
    public void updateProfessor(@RequestBody Professor professor) {
        professorService.update(professor);
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Professor> getAll() {
        List<Professor> list = professorService.findAll();
        int x = 0;
        return list;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Professor getById(@PathVariable Long id) {
        return professorService.findById(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteById(@PathVariable Long id) {
        professorService.deleteById(id);
    }
}
