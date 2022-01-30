import { Component, Input, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  @Input() carrinho: any;
  classToItemRealizado = {}

  constructor( private carrinhoService: CarrinhoService ) { }

  ngOnInit(): void {
  }

  adicionaItem(produto: any): void{
    const itenExiste = this.carrinhoService.itemExiste(produto)
    this.carrinhoService.carrinho.itens[itenExiste].quantidade ++
  }
  removeItem(produto: any): void{
    const itenExiste = this.carrinhoService.itemExiste(produto)
    this.carrinhoService.carrinho.itens[itenExiste].quantidade --
  }

}
