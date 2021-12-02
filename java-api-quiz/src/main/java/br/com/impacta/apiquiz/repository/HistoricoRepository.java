package br.com.impacta.apiquiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.impacta.apiquiz.model.Historico;

public interface HistoricoRepository extends JpaRepository<Historico, Integer> {

}