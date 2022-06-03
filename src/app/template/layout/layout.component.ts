import { CarrinhoService } from 'src/app/core/services/carrinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor( private carrinhoService: CarrinhoService ) { }

  ngOnInit(): void {
    if (localStorage.getItem("carrinho") && this.carrinhoService.carrinho.length === 0) {
      const itensCarrinho = JSON.parse(localStorage.getItem("carrinho")!) 
      this.carrinhoService.carregaCarrinhoLocalStorage(itensCarrinho)
    }
  }
  
}
