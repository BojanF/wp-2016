package mk.ukim.finki.wp.web.rest;


import mk.ukim.finki.wp.model.Student;
import mk.ukim.finki.wp.service.IStudentService;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by Bojan on 7/12/2017.
 */
@RestController
@RequestMapping(value = "/api/students", produces = "application/json")
public class StudentController {

    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        IStudentService bean = applicationContext.getBean(IStudentService.class);
        System.out.println(bean);
    }
    
    private IStudentService studentService;

    @Autowired
    public StudentController(IStudentService studentService) {
        this.studentService = studentService;
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Student save(@Valid @RequestBody Student student) {
        return studentService.insert(student);
    }

    @RequestMapping(value = "", method = RequestMethod.PUT)
    public void updateStudent(@RequestBody Student student) {
        studentService.update(student);
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Student> getAll() {
        List<Student> list = studentService.findAll();
        int x = 0;
        return list;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Student getById(@PathVariable Long id) {
        return studentService.findById(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteById(@PathVariable Long id) {
        studentService.deleteById(id);
    }
}
