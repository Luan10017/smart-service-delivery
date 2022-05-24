import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from '../../models/Pedido';

@Component({
  selector: 'app-pedido-concluido-card',
  templateUrl: './pedido-concluido-card.component.html',
  styleUrls: ['./pedido-concluido-card.component.css']
})
export class PedidoConcluidoCardComponent implements OnInit {

  @Input() pedido!: Pedido;


  constructor() { }

  ngOnInit(): void {
    
  }

}
