/*
 * Created by ristes on 12/2/16.
 */

package mk.ukim.finki.wp.model;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "wp_lab_groups")
public class Group extends BaseEntity {

    public String getName() {
        return name;
    }

    public Integer getGroupSize() {
        return groupSize;
    }

    public Course getCourse() {
        return course;
    }

    public Professor getProfessor() {
        return professor;
    }

    public static class FIELDS {
        public static String ID = "id";
        public static String NAME = "name";
        public static String GROUP_SIZE = "groupSize";
        public static String COURSE = "course";
        public static String PROFESSOR = "professor";
    }

  @NotNull
  public String name;

  @Min(value = 0)
  public Integer groupSize;

  // generates foreign key; if absent, exception will be thrown; FetchType.EAGER is default
  @ManyToOne(fetch = FetchType.EAGER)
  // sets the column name to the default value; optional annotation
  @JoinColumn(name = "course_id")
  public Course course;

  @ManyToOne
  public Professor professor;

  @Override
  public String toString() {
    return String.format("\n[%d] %s", id, name);
  }

}
