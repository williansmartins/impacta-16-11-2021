package br.com.impacta.laboratorio4;

public class Laboratorio1 {
	
	public static void main(String[] args) {
		for (int i = 0; i <= 100; i++) {
			Laboratorio1.verificarNumeroPrimoV1(i);
		}
		
		//Laboratorio1.verificarNumeroPrimoV0();
	}
	
	static void verificarNumeroPrimoV0() {
		int valor = 13;
		int quantidadeDeDivisoes = 0;
		
		for (int i = 2; i < valor; i++) {
			//System.out.print(i);
			//System.out.print(" - " + valor+ "%" + i + "=");
			//System.out.print(valor % i);
			//System.out.print("\n");
			
			if(valor % i == 0) {
				quantidadeDeDivisoes++;
			}
		}
		
		if(quantidadeDeDivisoes == 0) {
			System.out.println("O Número: " + valor + " é PRIMO!");
		}else {
			System.out.println("O Número: " + valor + " NÃO é PRIMO!");
		}
	}
	
	static void verificarNumeroPrimoV1(int valor) {
		
		int quantidadeDeDivisoes = 0;
		
		for (int i = 2; i < valor; i++) {			
			if(valor % i == 0) {
				quantidadeDeDivisoes++;
			}
		}
		
		if(quantidadeDeDivisoes == 0) {
			System.out.println("O Número: " + valor + " é PRIMO!");
		}else {
			//System.out.println("O Número: " + valor + " NÃO é PRIMO!");
		}
	}
}
