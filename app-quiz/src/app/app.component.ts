import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pessoa } from './model/pessoa';
import { PessoaService } from './service/pessoa-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'nome', 'acoes'];
  dataSource;

  constructor(private service: PessoaService){
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe( 
      (response) => {
        alert('sucesso!');
        this.dataSource = new MatTableDataSource <Pessoa> (response);
      },
      (response) => {
        alert("Erro!");
      }
    );
  }
}