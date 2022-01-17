import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './components/product-card/product.model'

import { map } from 'rxjs/operators'


export interface ObjetoPayload {
  data: Array<ObjetoPayload2<Product>>;
  // data:Product[];
  // Array<AppEventListener<T>>
 }

 export interface ObjetoPayload2<T> {
  produtos: Array<Product>;
 }

export interface Result {
  data: Product
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // baseUrl = "http://localhost:3001/products"
  baseUrl = "http://localhost:8080/produtos"
  constructor(private http: HttpClient) { }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl,{})
  }
  read5(): Observable<ObjetoPayload> {
    return this.http.get<ObjetoPayload>(this.baseUrl,{})
  }
  // read2(): Observable<Product[]> {
  //   return this.http.get<ObjetoPayload2>(this.baseUrl,{}).pipe(map((res: ObjetoPayload2) => res.produtos))
  // }
  // read4(): Observable<ObjetoPayload[]> {
  //   return this.http.get<ObjetoPayload[]>(this.baseUrl,{}).pipe(map( ))
  // }
  read3(): Observable<any> {
    return this.http.get<any>(this.baseUrl,{})
  }
  /* read2(): Observable<Product[]> {
    return this.http.get<ObjetoPayload>(this.baseUrl,{})
  } */
}
