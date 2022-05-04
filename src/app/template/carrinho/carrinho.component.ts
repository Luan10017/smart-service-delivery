import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from 'src/app/core/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  @Input() carrinho: any;
  classToItemRealizado = {}

  constructor( private carrinhoService: CarrinhoService, private router: Router ) { }

  ngOnInit(): void {
  }

  adicionaItem(produto: any): void{
    this.carrinhoService.adicionarAoCarrinho(produto)
  }
  removeItem(produto: any): void{
    this.carrinhoService.tiraItem(produto)
  }

  realizaPedidos(): void{
    this.carrinhoService.realizaPedidos()
  }

  finalizaPedido(): void {
    this.router.navigate(['/pagamento'])
  }

  limpaCarrinho(): void {
    this.carrinhoService.limpaCarrinho()
  }
}
