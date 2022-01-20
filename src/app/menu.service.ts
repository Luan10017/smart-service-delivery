import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Produto } from './classes/Produto';

export interface ObjetoPayload {
  data: Array<ObjetoPayloadProduct<Produto>>;
}

export interface ObjetoPayloadProduct<T> {
  produtos: Array<Produto>;
}

export interface Result {
  data: Produto
}

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  baseUrl = "http://localhost:8080/produtos/categoria/BEBIDAS"
  constructor(private http: HttpClient) { }

  getItens(): Observable<ObjetoPayload> {
    return this.http.get<ObjetoPayload>(this.baseUrl, {})
  }
}
