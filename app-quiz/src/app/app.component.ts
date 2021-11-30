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
  displayedColumnsPergunta: string[] = ['id', 'titulo', 'acoes'];
  dataSource;
  dataSourcePergunta;
  mostrarFormulario = false;
  pessoa: Pessoa = new Pessoa();

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

  salvar(){
    if(this.pessoa.id){
      this.atualizarNoBanco();
    }else{
      this.criarNoBanco();
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

  novaPessoa(){
    this.mostrarFormulario = true;
    this.pessoa = new Pessoa();
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