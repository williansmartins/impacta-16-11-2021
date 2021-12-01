import { Component, OnInit } from '@angular/core';
import { Historico } from '../model/historico';
import { Pergunta } from '../model/pergunta';
import { Pessoa } from '../model/pessoa';
import { HistoricoService } from '../service/historico.service';
import { PerguntaService } from '../service/pergunta-service.service';

@Component({
  templateUrl: './simulado.component.html',
  styleUrls: ['./simulado.component.less']
})
export class SimuladoComponent implements OnInit {

  perguntas: Pergunta[];
  pergunta: Pergunta;
  resposta: String;
  historico: Historico;

  constructor(
    private perguntaService: PerguntaService,
    private historicoService: HistoricoService
  ) { }

  ngOnInit(): void {
    this.buscarPerguntas();
  }

  buscarPerguntas(){
    this.perguntaService.findAll().subscribe(
      data => { 
        this.perguntas = data._embedded.pergunta;
        this.pergunta = this.perguntas[2];
        console.info(this.perguntas);
      }
    );
  }

  enviar(){
    this.historico = new Historico();
    this.historico.pergunta = this.pergunta;
    this.historico.pessoa = new Pessoa();
    this.historico.pessoa.id = 5;
    this.historico.resposta = this.resposta;

    this.historicoService.create(this.historico).subscribe(
      data => console.info(data)
    );
  }

}
