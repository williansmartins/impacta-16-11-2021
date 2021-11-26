package br.com.impacta.apiquiz.contoller;

import br.com.impacta.apiquiz.repository.PessoaRepository;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.impacta.apiquiz.model.Pessoa;

@RestController
@RequestMapping("/pessoa")
public class PessoaController {
	
	private final PessoaRepository repository;
	
	PessoaController(PessoaRepository repository) {
	    this.repository = repository;
	  }

	//GET localhost:8080/pessoa/a
	@GetMapping("")
	public List<Pessoa> getAll() {
		
		return repository.findAll();
		
//		Pessoa p1 = new Pessoa();
//		p1.setNome("Luis Miguel");
//		p1.setIdade(5);
//
//		Pessoa p2 = new Pessoa();
//		p2.setNome("Luis Felipe");
//		p2.setIdade(7);
//
//		List<Pessoa> lista = new ArrayList<Pessoa>();
//		lista.add(p1);
//		lista.add(p2);
//
//		return lista;
	}

}
