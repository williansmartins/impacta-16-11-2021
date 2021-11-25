package br.com.impacta.pacote;

public class Pessoa {

	private int idade;
	String nome;
	static int contador = 0;
	Cachorro c1;
	
	Pessoa(){
		contador++;
		System.out.println("Nasceu " + contador + " pessoa(s).");
	}
	
	Pessoa(String a, int b){
		this.nome = a;
		this.idade = b;
	}
	
	//STATIC == GLOBAL
	static void cortarCabelo() {
		System.out.println("Cortando cabelo...");
	}
	
	public int getIdade() {
		//if(joao)
		return this.idade;
	}
	
	public void setIdade(int idade) {
		this.idade = idade;
	}
}
