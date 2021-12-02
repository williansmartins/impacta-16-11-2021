package br.com.impacta.apiquiz.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity
public class Historico {

	@Id
	@GeneratedValue
	private int id;

	private String execucao;

	@ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "historico_pessoa", 
      joinColumns = @JoinColumn(name = "historico_id", referencedColumnName = "id"), 
      inverseJoinColumns = @JoinColumn(name = "pessoa_id", referencedColumnName = "id"))
	private List<Pessoa> pessoa;

	@ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "historico_pergunta", 
      joinColumns = @JoinColumn(name = "historico_id", referencedColumnName = "id"), 
      inverseJoinColumns = @JoinColumn(name = "pergunta_id", referencedColumnName = "id"))
	private List<Pergunta> pergunta;

	private int resposta;

	public String getExecucao() {
		return execucao;
	}

	public void setExecucao(String execucao) {
		this.execucao = execucao;
	}
	
	public List<Pessoa> getPessoa() {
		return pessoa;
	}

	public void setPessoa(List<Pessoa> pessoa) {
		this.pessoa = pessoa;
	}

	public List<Pergunta> getPergunta() {
		return pergunta;
	}

	public void setPergunta(List<Pergunta> pergunta) {
		this.pergunta = pergunta;
	}

	public int getResposta() {
		return resposta;
	}

	public void setResposta(int resposta) {
		this.resposta = resposta;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

}
