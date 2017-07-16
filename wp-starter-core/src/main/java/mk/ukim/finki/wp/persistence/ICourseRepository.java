package mk.ukim.finki.wp.persistence;

import mk.ukim.finki.wp.model.Course;

import java.util.List;

/**
 * Created by Bojan on 7/8/2017.
 */
public interface ICourseRepository {

    List<Course> findAll();

    Course findById(Long id);

    Course insert(Course course);

    Course update(Course course);

    void deleteById(Long id);
    
}
