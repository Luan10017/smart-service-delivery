import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarrinhoService } from 'src/app/core/services/carrinho.service';
import { PedidosService } from 'src/app/core/services/pedidos.service';

@Component({
  selector: 'app-pagamento-delivery',
  templateUrl: './pagamento-delivery.component.html',
  styleUrls: ['./pagamento-delivery.component.css']
})
export class PagamentoDeliveryComponent implements OnInit {

  constructor(
    private carrinhoService: CarrinhoService,
    private pedidos: PedidosService,
    private toastr: ToastrService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem("carrinho") && this.carrinhoService.carrinho.length === 0) {
      const itensCarrinho = JSON.parse(localStorage.getItem("carrinho")!) 
      this.carrinhoService.carregaCarrinhoLocalStorage(itensCarrinho)
    }
  }

  finalizaPedido(): void {
    const formaPagamento = this.pegaValorButtonRadio()
   
    if ( localStorage.getItem("idUsuario") ) {
      const idUsuario = localStorage.getItem("idUsuario") as string
      this.pedidos.postPedido(this.carrinhoService.carrinho, idUsuario, formaPagamento)
        .subscribe(res => {
          this.carrinhoService.limpaCarrinho()
          const whatsAppUrl = res.data[0].message
          window.open(whatsAppUrl, '_blank')
          this.router.navigate(['/'])
        })
    } else {
      this.toastr.error("Opa algo deu errado 😥")
    }
  }

  pegaValorButtonRadio():string {
    const radioButtons = document.querySelectorAll(".form-check-input") as any
    let radioButtonValue = ""

    for (let i = 0; i < 4; i++) {
      if (radioButtons[i].checked === true) {
        console.log(radioButtons[i].value)
        radioButtonValue = radioButtons[i].value
      }      
    }

    return radioButtonValue
  }

}
