import { Product } from './product.model';
import { Component, Input, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { Produto } from 'src/app/classes/Produto';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() products: any;

  constructor( private carrinhoService: CarrinhoService ) { }

  ngOnInit(): void {
  }


  adicionarAoCarrinho(produto: Produto) {
    this.carrinhoService.adicionarAoCarrinho(produto)
  }
}
