import { Produto } from './../../shared/models/Produto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


export interface ObjetoPayload {
  data: Array<ObjetoPayload2<string>>;
}

export interface ObjetoPayload2<T> {
  produtoId: Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class CadastroProdutosService {

  baseUrl = `${environment.API}cadastra/produto`

  constructor(private http: HttpClient) { }

  postItem(produto: Produto): Observable<ObjetoPayload> {
    return this.http.post<ObjetoPayload>(this.baseUrl, produto)
  }

  putItem(item: any, id: any): Observable<any> {
    const url_id = `${environment.API}cadastra/imagem/produto/${id}`;
    return this.http.put<any>(url_id, item);
  }

  putProduto(item: any, id: any): Observable<any> {
    const url_id = `${environment.API}edita/produto/${id}`;
    return this.http.put<any>(url_id, item);
  }
}
