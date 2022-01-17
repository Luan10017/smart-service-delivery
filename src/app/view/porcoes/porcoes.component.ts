import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/components/product-card/product.model';
import { MenuService } from 'src/app/menu.service';

@Component({
  selector: 'app-porcoes',
  templateUrl: './porcoes.component.html',
  styleUrls: ['./porcoes.component.css']
})
export class PorcoesComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: MenuService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products.filter(({categoria}) => categoria == "porcoes")
    })
  }

}
