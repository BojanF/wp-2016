package mk.ukim.finki.wp.web.rest;

import mk.ukim.finki.wp.model.Grade;
import mk.ukim.finki.wp.service.IGradeService;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by Bojan on 7/13/2017.
 */
@RestController
@RequestMapping(value = "/api/grades", produces = "application/json")
public class GradeController implements ApplicationContextAware{

    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        IGradeService bean = applicationContext.getBean(IGradeService.class);
        System.out.println(bean);
    }

    private IGradeService gradeService;

    @Autowired
    public GradeController(IGradeService gradeService) {
        this.gradeService = gradeService;
    }


    @RequestMapping(value = "", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Grade save(@Valid @RequestBody Grade grade) {
        int x=0;
        return gradeService.insert(grade);
    }

    @RequestMapping(value = "/student/{id}", method = RequestMethod.GET)
    public List<Grade> getStudentGrades(@PathVariable Long id) {
        List<Grade> list = gradeService.studentGrades(id);
        int x = 0;
        return list;
    }

    @RequestMapping(value = "/professor/{id}", method = RequestMethod.GET)
    public List<Grade> getProfessorGrades(@PathVariable Long id) {
        List<Grade> list = gradeService.professorGrades(id);
        int x = 0;
        return list;
    }



}
