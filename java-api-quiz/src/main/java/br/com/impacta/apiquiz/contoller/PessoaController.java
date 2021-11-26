package br.com.impacta.apiquiz.contoller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.impacta.apiquiz.model.Pessoa;

@RestController
@RequestMapping("/pessoa")
public class PessoaController {

	//GET localhost:8080/pessoa/2
	@GetMapping("/1")
	public Pessoa getA() {
		Pessoa p1 = new Pessoa();
		p1.setNome("Willians");
		p1.setIdade(123);
		return p1;
	}
	
	//GET localhost:8080/pessoa
	@GetMapping("")
	public List<Pessoa> getAll() {
		Pessoa p1 = new Pessoa();
		p1.setNome("Willians");
		p1.setIdade(123);
		
		Pessoa p2 = new Pessoa();
		p2.setNome("Luis Felipe");
		p2.setIdade(44);
		
		List<Pessoa> lista = new ArrayList<Pessoa>();
		lista.add(p1);
		lista.add(p2);
		
		return lista;
	}
	
	//POST localhost:8080/pessoa {data}
	@PostMapping("")
	public Pessoa create(@RequestBody Pessoa entrada) {
		//inserir pessoa no banco
		//depois
		
		Pessoa pessoaCriada = entrada;
		pessoaCriada.setId(123);
		
		return pessoaCriada;
	}

}
