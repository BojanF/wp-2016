package mk.ukim.finki.wp.persistence.impl.entities;

import mk.ukim.finki.wp.model.Course;
import mk.ukim.finki.wp.model.Professor;
import mk.ukim.finki.wp.persistence.IProfessorRepository;
import org.hibernate.Criteria;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Bojan on 7/8/2017.
 */
@Primary
@Repository
public class ProfessorRepositoryImpl implements IProfessorRepository {

    @PersistenceContext(name = "wp")
    EntityManager entityManager;
    
    public List<Professor> findAll() {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Professor> cq = cb.createQuery(Professor.class);
        Root<Professor> from = cq.from(Professor.class);
        return entityManager.createQuery(cq).getResultList();
    }

    public List<Course> findCoursesNotAssignedToHim(Long professorId) {
        //TUKA
//        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
//        CriteriaQuery<Course> q = cb.createQuery(Course.class);
//        Root<Course> courseRoot = q.from(Course.class);
//        Root<Professor> professorRoot = q.from(Professor.class);
//        ParameterExpression<Long> id = cb.parameter(Long.class);
//        Join<Object, Object> fromCourse = courseRoot.join(Professor.FIELDS.COURSES);
//
//        q.select(courseRoot).where(cb.equal(professorRoot.get(Professor.FIELDS.ID), id),
//                                   cb.equal(professorRoot.get(Professor.FIELDS.ID), fromCourse.get(Professor.FIELDS.ID)),
//                                   cb.equal(courseRoot.get(Course.FIELDS.ID), fromCourse.get(Course.FIELDS.ID)) );
//
//        TypedQuery<Course> query = entityManager.createQuery(q);
//        query.setParameter(id, professorId);
//        List<Course> results = query.getResultList();
//        return results;
        return null;
    }

    @Transactional
    public Professor findById(Long id) {
        Professor professor = entityManager.find(Professor.class, id);
        if (professor != null) {
            entityManager.refresh(professor);
        }
        return professor;
    }

    @Transactional
    public Professor insert(Professor professor) {
        entityManager.persist(professor);
        entityManager.flush();
        return professor;
}

    @Transactional
    public Professor update(Professor professor) {
        professor = entityManager.merge(professor);
        entityManager.flush();
        int x = 0;
        return professor;
    }

    @Transactional
    public void deleteById(Long id) {
        entityManager.remove(findById(id));
    }
}
