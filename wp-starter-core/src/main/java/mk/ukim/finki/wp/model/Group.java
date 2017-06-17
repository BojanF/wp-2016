package mk.ukim.finki.wp.model;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

/**
<<<<<<< HEAD
 * Created by Bojan on 12/1/2016.
 */
@Entity
@Table(name = "lab_groups")
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotNull
    private String name;
    private Integer groupSize;
    @NotNull
    @Min(value = 0)
    private Long terms;



    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Integer getGroupSize() {
        return groupSize;
    }

    public Long getTerms() {
        return terms;
    }


    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setGroupSize(Integer groupSize) {
        this.groupSize = groupSize;
    }

    public void setTerms(Long terms) {
        this.terms = terms;
    }


    @Override
    public String toString() {
        return "Group{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", groupSize=" + groupSize +
                ", terms=" + terms +
                '}';
    }
=======
 * Created by ristes on 12/2/16.
 */
@Entity
@Table(name = "wp_groups")
public class Group extends BaseEntity {

  public static class FIELDS {
    public static String ID = "id";
    public static String NAME = "name";
    public static String GROUP_SIZE = "groupSize";
    public static String COURSE = "course";
    public static String PROFESSORS = "professor";
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
>>>>>>> upstream/master
}
