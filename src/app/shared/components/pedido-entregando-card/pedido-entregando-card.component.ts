import { Component, Input, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/core/services/pedidos.service';
import { environment } from 'src/environments/environment';
import { Pedido } from '../../models/Pedido';

@Component({
  selector: 'app-pedido-entregando-card',
  templateUrl: './pedido-entregando-card.component.html',
  styleUrls: ['./pedido-entregando-card.component.css']
})
export class PedidoEntregandoCardComponent implements OnInit {

  @Input() pedido!: Pedido;

  constructor(
    private pedidoService: PedidosService
  ) { }

  ngOnInit(): void {
  }

  patchToEntregando(idPedido: string) {
    const baseUrl = `${environment.API}alterar/status/pedido/${idPedido}`
    const body = {"status":"CONCLUIDO"}
    this.pedidoService.patchStatus(baseUrl, body)
      .subscribe( res => {
        PedidosService.emitirPedidoStatus.emit("CONCLUIDO")
      }, error => {
        console.log("erro")
        PedidosService.emitirPedidoStatus.emit("CONCLUIDO")

      })
  }

}
