package it.jonnysciar.website_ultraservizi.repositories;

import it.jonnysciar.website_ultraservizi.entities.Persona;
import org.springframework.data.repository.CrudRepository;

public interface PersonaRepository extends CrudRepository<Persona, Integer> {
}
