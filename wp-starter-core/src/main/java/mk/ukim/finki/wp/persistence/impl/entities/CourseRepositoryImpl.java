package mk.ukim.finki.wp.persistence.impl.entities;

import mk.ukim.finki.wp.model.Course;
import mk.ukim.finki.wp.persistence.ICourseRepository;
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
 * Created by Bojan on 7/8/2017.
 */
@Primary
@Repository
public class CourseRepositoryImpl implements ICourseRepository {

    @PersistenceContext(name = "wp")
    EntityManager entityManager;

    public List<Course> findAll() {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Course> cq = cb.createQuery(Course.class);
        Root<Course> from = cq.from(Course.class);
        return entityManager.createQuery(cq).getResultList();
    }

    @Transactional
    public Course findById(Long id) {
        Course course = entityManager.find(Course.class, id);
        if (course != null) {
            entityManager.refresh(course);
        }
        return course;
    }

    @Transactional
    public Course insert(Course course) {
        entityManager.persist(course);
        entityManager.flush();
        return course;
    }

    @Transactional
    public Course update(Course course) {
        course = entityManager.merge(course);
        entityManager.flush();
        int x = 0;
        return course;
    }

    @Transactional
    public void deleteById(Long id) {
        entityManager.remove(findById(id));
    }
}
