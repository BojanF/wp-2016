package mk.ukim.finki.wp.service.impl.entities;

import mk.ukim.finki.wp.model.Course;
import mk.ukim.finki.wp.persistence.ICourseRepository;
import mk.ukim.finki.wp.service.ICourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Bojan on 7/8/2017.
 */
@Service
public class CourseService implements ICourseService{

    @Autowired
    ICourseRepository courseRepository;

    public List<Course> findAll() {
        return courseRepository.findAll();
    }

    public Course findById(Long id) {
        return courseRepository.findById(id);
    }

    public Course insert(Course course) {
        return courseRepository.insert(course);
    }

    public Course update(Course course) {
        return courseRepository.update(course);
    }

    public void deleteById(Long id) {
        courseRepository.deleteById(id);
    }
}
