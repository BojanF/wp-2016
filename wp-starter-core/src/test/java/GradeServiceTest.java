import mk.ukim.finki.wp.model.Grade;
import mk.ukim.finki.wp.service.IGradeService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

/**
 * Created by Bojan on 7/14/2017.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:group-service-config.xml")
public class GradeServiceTest {

    @Autowired
    public IGradeService gradeService;


    @Test
    public void testStudentGrades(){
        //on the fly test
        List<Grade> gradesForStudent = gradeService.studentGrades(1l);
        int x = 0;
        Assert.assertEquals(2, gradesForStudent.size());
    }

}
