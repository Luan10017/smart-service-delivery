import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../../shared/models/Produto';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable(
  {providedIn: 'root'}
)
export class ProdutosService {

  baseURL =  "174.129.164.95:8080/produtos"
  // baseURL =  "http://localhost:8080/produtos"

  constructor(private http: HttpClient) { }

  public getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.baseURL).pipe(take(1));
  }

}
