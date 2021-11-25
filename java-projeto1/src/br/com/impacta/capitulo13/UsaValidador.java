package br.com.impacta.capitulo13;

public class UsaValidador {

	public static void main(String[] args) {
		Validador v = new Validador();
		System.out.println(v.validarCPF("95458451201"));
		System.out.println(v.validarCPF("954.584.512-01"));
		System.out.println(v.validarCPF("95458451202"));
		System.out.println(v.validarCPF("#"));
		System.out.println(v.validarCPF("123ç"));
		System.out.println(v.validarCPF(""));
		System.out.println(v.validarCPF("...-"));
		System.out.println(v.validarCPF("-"));
		System.out.println(v.validarCPF(" "));
		System.out.println(v.validarCPF("954 584 512 01"));
		System.out.println(v.validarCPF("\n"));
		System.out.println(v.validarCPF("\t"));
		System.out.println(v.validarCPF("\""));
		System.out.println(v.validarCPF("\'"));
		
	}

}
