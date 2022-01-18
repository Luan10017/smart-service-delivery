import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadastro } from '../classes/cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroClienteService {

  baseUrl = "http://localhost:8080/cadastra/cliente"
  
  constructor(private http: HttpClient) { }

  postItem(cadastro: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.baseUrl,cadastro)
  }
}
