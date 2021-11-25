import { MenuService } from './../../menu.service';
import { Product } from './../../components/product-card/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: MenuService) { }

  ngOnInit(): void {
    console.log(this.productService.read())
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }


}
