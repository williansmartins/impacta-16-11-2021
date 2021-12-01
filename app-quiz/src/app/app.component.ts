import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pergunta } from './model/pergunta';
import { Pessoa } from './model/pessoa';
import { PerguntaService } from './service/pergunta-service.service';
import { PessoaService } from './service/pessoa-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  displayedColumns: string[] = ['id', 'nome', 'acoes'];
  displayedColumnsPergunta: string[] = ['titulo', 'acoes'];
  dataSource;
  dataSourcePergunta;
  mostrarFormulario = false;
  mostrarFormularioPergunta = false;
  pessoa: Pessoa = new Pessoa();
  pergunta: Pergunta = new Pergunta();

  constructor(private service: PessoaService, private servicePergunta: PerguntaService){
  }

  ngOnInit(): void {
    this.findAll();
    this.findAllPergunta(); 
  }

  editar(element) {
    this.mostrarFormulario = true;
    this.pessoa = element;
  }

  editarPergunta(element) {
    this.mostrarFormularioPergunta = true;
    this.pergunta = element;
  }

  salvar(){
    if(this.pessoa.id){
      this.atualizarNoBanco();
    }else{
      this.criarNoBanco();
    }
  }

  salvarPergunta(){
    if( this.pergunta.idPublico ){
      this.atualizarPerguntaNoBanco();
    }else{
      this.criarPerguntaNoBanco();
    }
  }

  atualizarNoBanco(){
    this.service.update(this.pessoa).subscribe( 
      (response) => {
        this.findAll();
        this.mostrarFormulario = false;
      },
      (response) => {
        alert("Erro!");
      }
    );
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

  criarNoBanco(){
    this.service.create(this.pessoa).subscribe( 
      (response) => {
        this.findAll();
        this.mostrarFormulario = false;
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

  novaPessoa(){
    this.mostrarFormulario = true;
    this.pessoa = new Pessoa();
  }

  novaPergunta(){
    this.mostrarFormularioPergunta = true;
    this.pergunta = new Pergunta();
  }

  delete(id) {
    this.service.delete(id).subscribe( 
      (response) => {
        this.findAll();
      },
      (response) => {
        alert("Erro!");
      }
    );
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

  findAll() {
    this.service.findAll().subscribe( 
      (response) => {
        // alert('sucesso!');
        this.dataSource = new MatTableDataSource <Pessoa> (response);
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