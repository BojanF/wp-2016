package mk.ukim.finki.wp.service.impl.entities;

import mk.ukim.finki.wp.model.Grade;
import mk.ukim.finki.wp.persistence.IGradeRepository;
import mk.ukim.finki.wp.service.IGradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Bojan on 7/13/2017.
 */
@Service
public class GradeService implements IGradeService {

    @Autowired
    IGradeRepository gradeRepository;

    public Grade insert(Grade grade) {
        int x=0;
        return gradeRepository.insert(grade);
    }

    public List<Grade> studentGrades(Long studentId) {
        List<Grade> rez = gradeRepository.studentGrades(studentId);
        int x = 0;

        return rez;
    }

    public List<Grade> professorGrades(Long professorId) {
        return gradeRepository.professorGrades(professorId);
    }
}
