import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Categoria, Produto } from '../../shared/models/Produto';

export interface ObjetoPayload {
  data: Array<ObjetoPayloadProduct<Produto>>,
  dataCategoria: Array<ObjetoPayloadCategoria<Categoria>>;
}

export interface ObjetoPayloadProduct<T> {
  produtos: Array<Produto>,
}

export interface ObjetoPayloadCategoria<T> {
  categorias: Array<Categoria>;
}

export interface Result {
  data: Produto,
  dataCategoria: Categoria
}

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  constructor(private http: HttpClient) { }

  getItens(baseUrl: string): Observable<ObjetoPayload> {
    return this.http.get<ObjetoPayload>(baseUrl, {})
  }

  getCategorias(baseUrl: string): Observable<any> {
    return this.http.get<ObjetoPayload>(baseUrl)
  }

  getCategoriasTeste(baseUrl: string): Observable<ObjetoPayload> {
    return this.http.get<ObjetoPayload>(baseUrl, {})
  }

  deleteProduct(baseUrl: string): Observable<any> {
    return this.http.delete<any>(baseUrl)
  }
}
