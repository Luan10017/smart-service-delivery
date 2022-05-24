import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PedidosService } from 'src/app/core/services/pedidos.service';
import { environment } from 'src/environments/environment';
import { Pedido } from '../../models/Pedido';

@Component({
  selector: 'app-pedido-card',
  templateUrl: './pedido-confirmacao-card.component.html',
  styleUrls: ['./pedido-confirmacao-card.component.css']
})
export class PedidoConfirmacaoCardComponent implements OnInit {

  @Input() pedido!: Pedido;
  @Output() mudou = new EventEmitter()

  constructor(
    private pedidoService: PedidosService
  ) { }

  ngOnInit(): void {
  }

  patchToPreparando(idPedido: string) {
    const baseUrl = `${environment.API}alterar/status/pedido/${idPedido}`
    const body = {"status":"PREPARANDO"}
    this.pedidoService.patchStatus(baseUrl, body)
      .subscribe( res => {
        console.log(this.mudou.emit("true"))
      }, error => {
        console.log("erro")
        console.log(this.mudou.emit("true"))
      })
  }
}
