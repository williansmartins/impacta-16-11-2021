package br.com.impacta.apiquiz.contoller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.impacta.apiquiz.model.Pessoa;

@RestController
@RequestMapping("/pessoa")
public class PessoaController {

	//GET localhost:8080/pessoa/a
	@GetMapping("/a")
	public Pessoa getA() {
		Pessoa p1 = new Pessoa();
		p1.setNome("Willians");
		p1.setIdade(123);
		return p1;
	}

}
