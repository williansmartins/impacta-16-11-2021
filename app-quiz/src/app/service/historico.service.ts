import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Historico } from '../model/historico';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  private URL_API = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  create(pergunta: Historico){
    return this.http.post<Historico[]>(this.URL_API + '/historico', pergunta);
  }
}
