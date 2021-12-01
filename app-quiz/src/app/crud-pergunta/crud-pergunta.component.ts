import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pergunta } from '../model/pergunta';
import { PerguntaService } from '../service/pergunta-service.service';

@Component({
  templateUrl: './crud-pergunta.component.html',
  styleUrls: ['./crud-pergunta.component.less']
})
export class CrudPerguntaComponent implements OnInit {

  displayedColumnsPergunta: string[] = ['titulo', 'acoes'];
  dataSourcePergunta;
  mostrarFormularioPergunta = false;
  pergunta: Pergunta = new Pergunta();
  
  constructor(private servicePergunta: PerguntaService) { }

  ngOnInit(): void {
    this.findAllPergunta(); 
  }

  editarPergunta(element) {
    this.mostrarFormularioPergunta = true;
    this.pergunta = element;
  }



  salvarPergunta(){
    if( this.pergunta.idPublico ){
      this.atualizarPerguntaNoBanco();
    }else{
      this.criarPerguntaNoBanco();
    }
  }


  atualizarPerguntaNoBanco(){
    this.servicePergunta.update(this.pergunta).subscribe( 
      (response) => {
        this.findAllPergunta();
        this.mostrarFormularioPergunta = false;
      },
      (response) => {
        alert("Erro!");
      }
    );
  }



  criarPerguntaNoBanco(){
    this.servicePergunta.create(this.pergunta).subscribe( 
      (response) => {
        this.findAllPergunta();
        this.mostrarFormularioPergunta = false;
      },
      (response) => {
        alert("Erro!");
      }
    );
  }



  novaPergunta(){
    this.mostrarFormularioPergunta = true;
    this.pergunta = new Pergunta();
  }



  deletePergunta(id) {
    debugger;
    this.servicePergunta.delete(id).subscribe( 
      (response) => {
        this.findAllPergunta();
      },
      (response) => {
        alert("Erro!");
      }
    );
  }



  findAllPergunta() {
    this.servicePergunta.findAll().subscribe( 
      (response) => {
        // alert('sucesso!');
        // var perguntas = response._embedded;
        this.dataSourcePergunta = new MatTableDataSource <Pergunta> (response._embedded.pergunta);
        console.info(response);
      },
      (response) => {
        alert("Erro!");
      }
    );
  }
}
