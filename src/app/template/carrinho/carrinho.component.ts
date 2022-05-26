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
    private pedidos: PedidosService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  adicionaItem(produto: any): void{
    this.carrinhoService.adicionarAoCarrinho(produto)
  }
  removeItem(produto: any): void{
    this.carrinhoService.tiraItem(produto)
  }

  finalizaPedido(): void {
    if ( localStorage.getItem("idUsuario") ) {
      const idUsuario = localStorage.getItem("idUsuario") as string
      this.pedidos.postPedido(this.carrinhoService.carrinho, idUsuario)
        .subscribe(res => {
          this.limpaCarrinho()
          const whatsAppUrl = res.data[0].message
          window.open(whatsAppUrl, '_blank')
        })
    } else {
      this.toastr.error("Opa algo deu errado 😥")
    }
  }

  limpaCarrinho(): void {
    this.carrinhoService.limpaCarrinho()
  }
}
