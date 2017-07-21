package mk.ukim.finki.wp.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.util.Collection;
import java.util.List;

/**
 * Created by ristes on 12/9/16.
 */
@Entity
@Table(name = "wp_courses")
public class Course extends BaseEntity {

  @NotNull
  public String name;

  @NotNull
  public String shortName;

  // mappedBy references to the field 'course' in the entity 'Group'
  @OneToMany(mappedBy = "course", fetch = FetchType.EAGER)
  @JsonIgnore
  public List<Group> groups;

  public static class FIELDS{
    public static String ID = "id";
    public static String NAME = "name";
    public static String SHORT_NAME = "shortName";
    public static String GROUPS = "groups";
  }

}
