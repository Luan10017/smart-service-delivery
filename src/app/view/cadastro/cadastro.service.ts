import { Cadastro } from './cadastro';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl = " https://smart-service-fatec.azurewebsites.net/cadastra/cliente"
  constructor(private http: HttpClient) { }

  ok(cadastro: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.baseUrl,cadastro)
  }
}
