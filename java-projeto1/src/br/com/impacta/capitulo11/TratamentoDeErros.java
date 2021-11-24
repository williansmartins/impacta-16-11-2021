package br.com.impacta.capitulo11;

public class TratamentoDeErros {

	public static void main(String[] args) {
		
		System.out.println("MENSAGEM INICIAL");
		
		int valor = 10;
		int resultado = 0;
		
		try {
			resultado = valor / 0;
		}catch(ArithmeticException ex) {
			System.out.println("Ocorreu um erro, mas tudo eu ja tratei.");
			System.out.println("Mensagem para o Admnistrador: " + ex.getMessage());
		}
		
		System.out.println(resultado);
		System.out.println("MENSAGEM FINAL");

	}

}
