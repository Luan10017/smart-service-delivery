import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Produto } from '../../shared/models/Produto';

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

  constructor(private http: HttpClient) { }

  getItens(baseUrl: string): Observable<ObjetoPayload> {
    return this.http.get<ObjetoPayload>(baseUrl, {})
  }

  getCategorias(baseUrl: string): Observable<any> {
    return this.http.get<any>(baseUrl)
  }

  deleteProduct(baseUrl: string): Observable<any> {
    return this.http.delete<any>(baseUrl)
  }
}
