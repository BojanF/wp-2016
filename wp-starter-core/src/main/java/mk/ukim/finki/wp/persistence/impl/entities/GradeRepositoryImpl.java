package mk.ukim.finki.wp.persistence.impl.entities;

import mk.ukim.finki.wp.model.Grade;
import mk.ukim.finki.wp.persistence.IGradeRepository;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.ParameterExpression;
import javax.persistence.criteria.Root;
import java.util.List;

/**
 * Created by Bojan on 7/13/2017.
 */
@Primary
@Repository
public class GradeRepositoryImpl implements IGradeRepository {

    @PersistenceContext(name = "wp")
    EntityManager entityManager;

    @Transactional
    public Grade insert(Grade grade) {
        entityManager.persist(grade);
        entityManager.flush();
        return grade;
    }

    public List<Grade> studentGrades(Long studentId) {

        CriteriaBuilder cb = entityManager.getCriteriaBuilder();

        CriteriaQuery<Grade> q = cb.createQuery(Grade.class);
        Root<Grade> c = q.from(Grade.class);
        ParameterExpression<Long> id = cb.parameter(Long.class);
        q.select(c).where(cb.equal(c.get("student").get("id"), id));

        TypedQuery<Grade> query = entityManager.createQuery(q);
        query.setParameter(id, studentId);
        List<Grade> results = query.getResultList();

        return results;
    }

    public List<Grade> professorGrades(Long professorId) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();

        CriteriaQuery<Grade> q = cb.createQuery(Grade.class);
        Root<Grade> c = q.from(Grade.class);
        ParameterExpression<Long> id = cb.parameter(Long.class);
        q.select(c).where(cb.equal(c.get("professor").get("id"), id));

        TypedQuery<Grade> query = entityManager.createQuery(q);
        query.setParameter(id, professorId);
        List<Grade> results = query.getResultList();

        return results;
    }
}
