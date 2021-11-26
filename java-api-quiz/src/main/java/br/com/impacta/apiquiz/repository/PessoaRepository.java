package br.com.impacta.apiquiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.impacta.apiquiz.model.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Integer> {

}