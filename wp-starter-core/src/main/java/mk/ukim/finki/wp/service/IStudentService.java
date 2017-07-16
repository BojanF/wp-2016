package mk.ukim.finki.wp.service;

import mk.ukim.finki.wp.model.Student;

import java.util.List;

/**
 * Created by Bojan on 7/12/2017.
 */
public interface IStudentService {

    List<Student> findAll();

    Student findById(Long id);

    Student insert(Student student);

    Student update(Student student);

    void deleteById(Long id);

}
