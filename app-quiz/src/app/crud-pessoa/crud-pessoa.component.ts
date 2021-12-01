import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pessoa } from '../model/pessoa';
import { PessoaService } from '../service/pessoa-service.service';

@Component({
  templateUrl: './crud-pessoa.component.html',
  styleUrls: ['./crud-pessoa.component.less']
})
export class CrudPessoaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'acoes'];
  dataSource;
  mostrarFormulario = false;
  pessoa: Pessoa = new Pessoa();
  
  constructor(private service: PessoaService, ) { }

  ngOnInit(): void {
    this.findAll();
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

}
