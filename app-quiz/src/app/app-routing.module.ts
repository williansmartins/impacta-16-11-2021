import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudPerguntaComponent } from './crud-pergunta/crud-pergunta.component';
import { CrudPessoaComponent } from './crud-pessoa/crud-pessoa.component';
import { SimuladoComponent } from './simulado/simulado.component';

const routes: Routes = [
  {path: 'crud-pessoa', component: CrudPessoaComponent},
  {path: 'crud-pergunta', component: CrudPerguntaComponent},
  {path: 'simulado', component: SimuladoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
