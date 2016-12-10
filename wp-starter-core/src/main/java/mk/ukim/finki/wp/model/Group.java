package mk.ukim.finki.wp.model;

/**
 * Created by Bojan on 12/1/2016.
 */
public class Group {
    private Integer id;
    private String name;
    private Integer groupSize;
    private Integer terms;



    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Integer getGroupSize() {
        return groupSize;
    }

    public Integer getTerms() {
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

    public void setTerms(Integer terms) {
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
}
