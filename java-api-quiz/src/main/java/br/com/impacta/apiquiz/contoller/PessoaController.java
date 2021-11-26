package br.com.impacta.apiquiz.contoller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.impacta.apiquiz.model.Pessoa;
import br.com.impacta.apiquiz.repository.PessoaRepository;

@RestController
@RequestMapping("/pessoa")
public class PessoaController {

	private final PessoaRepository repository;

	PessoaController(PessoaRepository repository) {
		this.repository = repository;
	}

	@GetMapping("")
	public List<Pessoa> getAll() {
		return repository.findAll();
	}

	@GetMapping("/{id}")
	Optional<Pessoa> one(@PathVariable Long id) {
		return repository.findById(id);
	}

	@PostMapping("")
	public Pessoa create(@RequestBody Pessoa entrada) {
		return repository.save(entrada);
	}

	@DeleteMapping("/{id}")
	void deletePessoa(@PathVariable Long id) {
		repository.deleteById(id);
	}

	@PutMapping("/employees/{id}")
	Pessoa replace(@RequestBody Pessoa novo, @PathVariable Long id) {

		return repository.findById(id).map(objeto -> {
			objeto.setNome(novo.getNome());
			return repository.save(objeto);
		}).orElseGet(() -> {
			novo.setId(id);
			return repository.save(novo);
		});
	}

}
