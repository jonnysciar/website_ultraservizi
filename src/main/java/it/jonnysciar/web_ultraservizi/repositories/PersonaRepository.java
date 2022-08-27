package it.jonnysciar.web_ultraservizi.repositories;

import it.jonnysciar.web_ultraservizi.entities.Persona;
import org.springframework.data.repository.CrudRepository;

public interface PersonaRepository extends CrudRepository<Persona, Integer> {
}
