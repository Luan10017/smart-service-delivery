import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrinho } from 'src/app/shared/models/carrihno';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

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
}
