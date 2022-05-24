import { Injectable, EventEmitter } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrinho } from 'src/app/shared/models/carrihno';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  static emitirPedidoStatus = new EventEmitter<string>()

  baseUrl = `${environment.API}cadastra/pedido/delivery`

  constructor(private http: HttpClient) { }

  postPedido(carrinho: Carrinho, idUsuario: string): Observable<any> {
    const pedidoItens = carrinho.itens.map(({id, quantidade}) => ({id_produto: id, quantidade}))
    const pedidoPayload = {
      id_usuario: idUsuario,
      produtos: pedidoItens,
      forma_pagamento: "DEBITO"
    }
    return this.http.post<any>(this.baseUrl,pedidoPayload)
  }

  getByStatus(baseUrl: string): Observable<any> {
    return this.http.get<any>(baseUrl)
  }

  patchStatus(baseUrl: string, body: any): Observable<any> {
    return this.http.patch<any>(baseUrl,body)
  }
}
