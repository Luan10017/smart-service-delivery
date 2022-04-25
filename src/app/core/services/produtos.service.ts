import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../../shared/models/Produto';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable(
  {providedIn: 'root'}
)
export class ProdutosService {

  baseURL =  `${environment.API}produtos`

  constructor(private http: HttpClient) { }

  public getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.baseURL).pipe(take(1));
  }

}
