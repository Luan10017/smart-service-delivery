import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from '../../models/Pedido';

@Component({
  selector: 'app-pedido-preparacao-card',
  templateUrl: './pedido-preparacao-card.component.html',
  styleUrls: ['./pedido-preparacao-card.component.css']
})
export class PedidoPreparacaoCardComponent implements OnInit {

  @Input() pedido!: Pedido;

  constructor() { }

  ngOnInit(): void {
  }

}
