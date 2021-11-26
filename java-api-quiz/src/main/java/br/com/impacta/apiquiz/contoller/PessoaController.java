package br.com.impacta.apiquiz.contoller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.impacta.apiquiz.model.Pessoa;
import br.com.impacta.apiquiz.repository.PessoaRepository;

@RestController
@RequestMapping("/pessoa")
public class PessoaController {
	
	@Autowired
	PessoaRepository repository;
	
	@GetMapping("")
	public List<Pessoa> findAll() {
		return repository.findAll();
	}
	
	@PostMapping("")
	public Pessoa create(@RequestBody Pessoa entrada) {
		return repository.save(entrada);
	}
	
	@GetMapping("/{id}")
	public <Pessoa>Optional getOne(@PathVariable int id) {
		return repository.findById(id);
	}

}
