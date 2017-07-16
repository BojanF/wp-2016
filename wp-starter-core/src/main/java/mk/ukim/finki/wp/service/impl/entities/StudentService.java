package mk.ukim.finki.wp.service.impl.entities;

import mk.ukim.finki.wp.model.Student;
import mk.ukim.finki.wp.persistence.IStudentRepository;
import mk.ukim.finki.wp.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Bojan on 7/12/2017.
 */
@Service
public class StudentService implements IStudentService{

    @Autowired
    IStudentRepository studentRepository;

    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    public Student findById(Long id) {
        return studentRepository.findById(id);
    }

    public Student insert(Student student) {
        return studentRepository.insert(student);
    }

    public Student update(Student student) {
        return studentRepository.update(student);
    }

    public void deleteById(Long id) {
        studentRepository.deleteById(id);
    }
}
