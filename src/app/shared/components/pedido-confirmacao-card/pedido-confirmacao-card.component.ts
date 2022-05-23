import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-card',
  templateUrl: './pedido-confirmacao-card.component.html',
  styleUrls: ['./pedido-confirmacao-card.component.css']
})
export class PedidoConfirmacaoCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  teste(event: any) {
    console.log(event)
  }
}
