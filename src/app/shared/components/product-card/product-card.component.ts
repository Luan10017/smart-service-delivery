import { Component, Input, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/core/services/carrinho.service';
import { Produto } from 'src/app/shared/models/Produto';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() products: any;

  constructor( private carrinhoService: CarrinhoService,
               private router: Router,
               private toastr: ToastrService ) { }

  ngOnInit(): void {
  }


  adicionarAoCarrinho(produto: Produto) {
    this.carrinhoService.adicionarAoCarrinho(produto)
    this.toastr.success("Produto adicionado ao carrinho!")
  }

  vaiParaDetalhesProduto(event: any, id: string) {
    if(event.target.tagName !== "BUTTON") {
      this.router.navigate([`/produto/${id}`])
    }
  }
}
