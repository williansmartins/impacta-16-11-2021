package br.com.impacta.apiquiz.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import br.com.impacta.apiquiz.model.Pergunta;

@RepositoryRestResource(collectionResourceRel = "pergunta", path = "pergunta")
public interface PerguntaRepository extends CrudRepository<Pergunta, Integer> {

}