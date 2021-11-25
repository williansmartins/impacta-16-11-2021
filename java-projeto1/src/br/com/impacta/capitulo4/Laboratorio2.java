package br.com.impacta.capitulo4;

import java.util.Scanner;

import javax.swing.JOptionPane;

public class Laboratorio2 {
	public static void main(String[] args) {
		//String mesA = "34";
		//String mesB = new Scanner(System.in).nextLine();
		String mes = JOptionPane.showInputDialog("Digite o nome de um mês");
		
		switch(mes) {
			case "Janeiro" : System.out.println("O mês " + mes + " termina em 31"); break;
			case "Fevereiro" : System.out.println("O mês " + mes + " termina em 28"); break;
			case "Março" : System.out.println("O mês " + mes + " termina em 31"); break;
			case "Abril" : System.out.println("O mês " + mes + " termina em 30"); break;
			case "Maio" : System.out.println("O mês " + mes + " termina em 31"); break;
			case "Junho" : System.out.println("O mês " + mes + " termina em 30"); break;
			case "Julho" : System.out.println("O mês " + mes + " termina em 31"); break;
			case "Agosto" : System.out.println("O mês " + mes + " termina em 31"); break;
			case "Setembro" : System.out.println("O mês " + mes + " termina em 30"); break;
			case "Outubro" : System.out.println("O mês " + mes + " termina em 31"); break;
			case "Novembro" : System.out.println("O mês " + mes + " termina em 30"); break;
			case "Dezembro" : System.out.println("O mês " + mes + " termina em 31"); break;
			default : System.out.print("Não encontrei o mês");
		}
	}
}
