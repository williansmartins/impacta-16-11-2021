package br.com.impacta.apiquiz.contoller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.impacta.apiquiz.model.Historico;
import br.com.impacta.apiquiz.repository.HistoricoRepository;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/historico")
public class HistoricoController {
	
	@Autowired
	HistoricoRepository repository; 
	
	@GetMapping("")
	public List<Historico> findAll() {
		return repository.findAll();
	}
	
	@PostMapping("")
	public Historico create(@RequestBody Historico entrada) {
		return repository.save(entrada);
	} 
	
	@GetMapping("/{id}")
	public <Historico>Optional getOne(@PathVariable int id) {
		return repository.findById(id);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable int id) {
		repository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public Historico update(@RequestBody Historico entrada, @PathVariable int id) {
		entrada.setId(id);
		return repository.save(entrada);
	}

}
