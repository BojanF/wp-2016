package mk.ukim.finki.wp.service.impl.entities;

import mk.ukim.finki.wp.model.Professor;
import mk.ukim.finki.wp.persistence.IProfessorRepository;
import mk.ukim.finki.wp.service.IProfessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Bojan on 7/8/2017.
 */
@Service
public class ProfessorService implements IProfessorService {

    @Autowired
    IProfessorRepository professorRepository;

    public List<Professor> findAll() {
        return professorRepository.findAll();
    }

    public Professor findById(Long id) {
        return professorRepository.findById(id);
    }

    public Professor insert(Professor professor) {
        return professorRepository.insert(professor);
    }

    public Professor update(Professor professor) {
        return professorRepository.update(professor);
    }

    public void deleteById(Long id) {
        professorRepository.deleteById(id);
    }
}
