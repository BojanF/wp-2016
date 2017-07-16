package mk.ukim.finki.wp.persistence;

import mk.ukim.finki.wp.model.Course;
import mk.ukim.finki.wp.model.Professor;

import java.util.List;

/**
 * Created by Bojan on 7/8/2017.
 */
public interface IProfessorRepository {

    List<Professor> findAll();

    List<Course> findCoursesNotAssignedToHim(Long professorId);

    Professor findById(Long id);

    Professor insert(Professor professor);

    Professor update(Professor professor);

    void deleteById(Long id);
    
}
