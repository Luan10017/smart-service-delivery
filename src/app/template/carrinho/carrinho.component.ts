import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarrinhoService } from 'src/app/core/services/carrinho.service';
import { PedidosService } from 'src/app/core/services/pedidos.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  @Input() carrinho: any;
  classToItemRealizado = {}

  constructor(
    private carrinhoService: CarrinhoService,
  ) { }

  ngOnInit(): void {
  }

  adicionaItem(produto: any): void{
    this.carrinhoService.adicionarAoCarrinho(produto)
  }
  removeItem(produto: any): void{
    this.carrinhoService.tiraItem(produto)
  }

  limpaCarrinho(): void {
    this.carrinhoService.limpaCarrinho()
  }
}
