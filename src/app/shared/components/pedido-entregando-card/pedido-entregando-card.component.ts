import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from '../../models/Pedido';

@Component({
  selector: 'app-pedido-entregando-card',
  templateUrl: './pedido-entregando-card.component.html',
  styleUrls: ['./pedido-entregando-card.component.css']
})
export class PedidoEntregandoCardComponent implements OnInit {

  @Input() pedido!: Pedido;

  constructor() { }

  ngOnInit(): void {
  }

}
