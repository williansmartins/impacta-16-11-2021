package br.com.impacta.capitulo13;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.jupiter.api.Test;

public class ValidadorTest {

	@Test
	void validarCPFValido() {
		Validador v = new Validador();
		boolean resultado = v.validarCPF("95458451201");
		
		assertTrue(resultado);
	}
	
	@Test
	void validarCPFInvalido() {
		Validador v = new Validador();
		boolean resultado = v.validarCPF("xxx");
		
		assertFalse(resultado);
	}
	
	@Test
	void validarCPFComPontos() {
		Validador v = new Validador();
		boolean resultado = v.validarCPF("954.584.512-01");
		
		assertTrue(resultado);
	}
}
