import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


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

  baseUrl = "http://localhost:8080/cadastra/produto"

  constructor(private http: HttpClient) { }

  ok(cadastro: any): Observable<ObjetoPayload> {
    return this.http.post<ObjetoPayload>(this.baseUrl,cadastro)
  }
  // ok(cadastro: any): Observable<any> {
  //   return this.http.post<any>(this.baseUrl,cadastro)
  // }

  
  putItem(item: any, id: any) : Observable<any> {
    const url_id = `http://localhost:8080/cadastra/imagem/produto/${id}`;
    return this.http.put<any>(url_id, item);
}
}
