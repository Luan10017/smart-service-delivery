import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { CarrinhoService } from 'src/app/core/services/carrinho.service';
import { MenuService } from 'src/app/core/services/menu.service';
import { Product } from 'src/app/shared/models/product.model';
import { Produto } from 'src/app/shared/models/Produto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  @Input() products: any;

  product!: Produto
  id!: number

  constructor(
    private productService: MenuService,
    private route: ActivatedRoute,
    private carrinhoService: CarrinhoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => this.id = res.id)
    const baseUrl =  `${environment.API}produto/${this.id}`

    this.productService.getItens(baseUrl).pipe(map(result => result.data[0].produtos))
    .subscribe(res => {
      this.product = res[0]
    })
  }

  adicionarAoCarrinho(produto: Produto) {
    this.carrinhoService.adicionarAoCarrinho(produto)
    this.toastr.success("Produto adicionado ao carrinho!")
  }


}
