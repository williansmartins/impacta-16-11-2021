package br.com.impacta.pacote2;

import com.octo.captcha.module.acegi.JCaptchaServiceProxy;

public class UsaCalculadora {

	public static void main(String[] args) {
		Calculadora c1 = new Calculadora();
		Calculadora c2 = new Calculadora(1);
		int valor1 = c1.somar(22, 42);
		int valor2 = c1.somar(23, 43);
		int valor3 = c1.somar(24, 44);
		
		System.out.println(valor1);
		System.out.println(valor2);
		System.out.println(valor3);
		
	}
}
