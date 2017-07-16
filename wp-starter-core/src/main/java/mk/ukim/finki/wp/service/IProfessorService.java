package mk.ukim.finki.wp.service;

import mk.ukim.finki.wp.model.Professor;

import java.util.List;

/**
 * Created by Bojan on 7/8/2017.
 */
public interface IProfessorService {

    List<Professor> findAll();

    Professor findById(Long id);

    Professor insert(Professor professor);

    Professor update(Professor professor);

    void deleteById(Long id);

}
