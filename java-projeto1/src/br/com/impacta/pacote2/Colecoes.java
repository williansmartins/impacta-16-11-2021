package br.com.impacta.pacote2;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Colecoes {
	
	public static void main(String[] args) {
		//maca, banana, pessego, morango
		List lista = new ArrayList();
		lista.add("maca");
		lista.add("banana");
		lista.add("pessego");
		lista.add("morango");
		System.out.println("Tamanho da lista: " + lista.size());
		System.out.println(lista.get(3));
		System.out.println(lista.contains("banana"));
		System.out.println(lista);
		lista.remove("banana");
		lista.remove(2);
		System.out.println(lista);
		
		Map<String, List> mapa = new HashMap<String, List>();
		mapa.put("janeiro", lista);
		mapa.put("fevereiro", lista);
		
		System.out.println(mapa.get("23"));
		
		
	}
}
