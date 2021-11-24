package br.com.impacta.pacote;

import br.com.impacta.pacote2.Calculadora;

public class UsaPessoa {

	public static void main(String[] args) {
		Pessoa p1 = new Pessoa();
		Pessoa p2 = new Pessoa();
		Pessoa p3 = new Pessoa();
		Pessoa p4 = new Pessoa();
		Pessoa p5 = new Pessoa("Willians",  33);
		
		System.out.println(p1.getIdade());
		System.out.println(p1.c1);
		System.out.println(p5.nome);
		
		p1.setIdade(20); 
		p2.setIdade(50); 
		
		p2.nome = "thales";
		p1.nome = "joao";
		
		p1.cortarCabelo();
		p2.cortarCabelo();
		
		System.out.println(p1.getIdade() +" "+ p1.nome);
		System.out.println(p2.getIdade() +" "+ p2.nome);
		
		Calculadora c1 = new Calculadora();
		
	}
}
