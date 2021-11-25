import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './components/product-card/product.model'


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // baseUrl = "http://localhost:3001/products"
  baseUrl = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  read(): Observable<Product[]> {
    return this.http.post<Product[]>(this.baseUrl,{})
  }
}
