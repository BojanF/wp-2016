package mk.ukim.finki.wp.persistence;

import mk.ukim.finki.wp.model.Grade;

import java.util.List;

/**
 * Created by Bojan on 7/13/2017.
 */
public interface IGradeRepository {

    Grade insert(Grade grade);

    List<Grade> studentGrades(Long studentId);

    List<Grade> professorGrades(Long professorId);
}
