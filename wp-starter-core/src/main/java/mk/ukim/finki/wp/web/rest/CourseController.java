package mk.ukim.finki.wp.web.rest;

import mk.ukim.finki.wp.model.Course;
import mk.ukim.finki.wp.service.ICourseService;
import mk.ukim.finki.wp.service.ICourseService;
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
@RequestMapping(value = "/api/courses", produces = "application/json")
public class CourseController implements ApplicationContextAware {

    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        ICourseService bean = applicationContext.getBean(ICourseService.class);
        System.out.println(bean);
    }

    private ICourseService courseService;

    @Autowired
    public CourseController(ICourseService courseService) {
        this.courseService = courseService;
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Course save(@Valid @RequestBody Course course) {
        return courseService.insert(course);
    }

    @RequestMapping(value = "", method = RequestMethod.PUT)
    public void updateCourse(@RequestBody Course course) {
        courseService.update(course);
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Course> getAll() {
        List<Course> list = courseService.findAll();
        int x = 0;
        return list;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Course getById(@PathVariable Long id) {
        return courseService.findById(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteById(@PathVariable Long id) {
        courseService.deleteById(id);
    }


}
