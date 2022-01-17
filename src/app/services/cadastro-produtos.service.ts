import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroProdutosService {

  baseUrl = "http://localhost:8080/cadastra/produto"

  constructor(private http: HttpClient) { }

  ok(cadastro: any): Observable<any> {
    return this.http.post<any>(this.baseUrl,cadastro)
  }

  
  putItem(item: any, id: any) : Observable<any> {
    const url_id = `http://localhost:8080/cadastra/imagem/produto/${id}`;
    return this.http.put<any>(url_id, item);
}
}
