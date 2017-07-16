package mk.ukim.finki.wp.persistence.impl.entities;


import mk.ukim.finki.wp.model.Student;
import mk.ukim.finki.wp.persistence.IStudentRepository;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

/**
 * Created by Bojan on 7/12/2017.
 */
@Primary
@Repository
public class StudentRepositoryImpl implements IStudentRepository {

    @PersistenceContext(name = "wp")
    EntityManager entityManager;

    public List<Student> findAll() {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Student> cq = cb.createQuery(Student.class);
        Root<Student> from = cq.from(Student.class);
        return entityManager.createQuery(cq).getResultList();
    }

    @Transactional
    public Student findById(Long id) {
        Student student = entityManager.find(Student.class, id);
        if (student != null) {
            entityManager.refresh(student);
        }
        return student;
    }

    @Transactional
    public Student insert(Student student) {
        entityManager.persist(student);
        entityManager.flush();
        return student;
    }

    @Transactional
    public Student update(Student student) {
        student = entityManager.merge(student);
        entityManager.flush();
        return student;
    }

    @Transactional
    public void deleteById(Long id) {
        entityManager.remove(findById(id));
    }
}
