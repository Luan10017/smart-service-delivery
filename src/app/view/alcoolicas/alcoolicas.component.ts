import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/components/product-card/product.model';
import { MenuService } from 'src/app/menu.service';

@Component({
  selector: 'app-alcoolicas',
  templateUrl: './alcoolicas.component.html',
  styleUrls: ['./alcoolicas.component.css']
})
export class AlcoolicasComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: MenuService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products.filter(({category}) => category == "alcoolicas")
    })
  }

}
