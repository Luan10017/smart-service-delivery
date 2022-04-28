import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
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

  constructor(private productService: MenuService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => this.id = res.id)
    const baseUrl =  `${environment.API}produto/${this.id}`

    this.productService.getItens(baseUrl).pipe(map(result => result.data[0].produtos))
    .subscribe(res => {
      this.product = res[0]

      console.log(this.product)
    })
  }


}
