import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria  } from '../../shared/models/Produto';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable(
  {providedIn: 'root'}
)
export class CategoriasService {

  baseURL =  `${environment.API}categorias`

  constructor(private http: HttpClient) { }

  public getCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.baseURL).pipe(take(1));
  }

}
