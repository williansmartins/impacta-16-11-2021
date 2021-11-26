package br.com.impacta.apiquiz.contoller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.impacta.apiquiz.model.Pessoa;

@RestController
@RequestMapping("/pessoa")
public class PessoaController {

	//GET localhost:8080/pessoa/a
	@GetMapping("")
	public List<Pessoa> getAll() {
		Pessoa p1 = new Pessoa();
		p1.setNome("Luis Miguel");
		p1.setIdade(5);

		Pessoa p2 = new Pessoa();
		p2.setNome("Luis Felipe");
		p2.setIdade(7);

		List<Pessoa> lista = new ArrayList<Pessoa>();
		lista.add(p1);
		lista.add(p2);

		return lista;
	}

}
