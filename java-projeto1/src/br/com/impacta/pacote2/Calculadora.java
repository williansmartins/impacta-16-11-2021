package br.com.impacta.pacote2;

import br.com.impacta.pacote.Pessoa;

public class Calculadora {
	
	public Calculadora() {
		System.out.println("oi - eu sou o construtor");
	}
	
	public Calculadora(int a) {
		System.out.println("oi - eu sou o construtor");
	}

	int somar(int a, int b) {
		int valor = a + b;
		return valor;
	}
	
	int somar2(Pessoa p1, Pessoa p2) {
		int valor1 = p1.getIdade();
		int valor2 = p2.getIdade();
		return valor1 + valor2;
	}
}
