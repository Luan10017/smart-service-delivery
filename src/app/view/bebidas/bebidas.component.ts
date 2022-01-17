import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/components/product-card/product.model';
import { MenuService } from 'src/app/menu.service';
import { map } from 'rxjs/operators'
import { pipe } from 'rxjs';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: MenuService) { }

  ngOnInit(): void {
    // this.productService.read2().subscribe(res => {
    //   console.log(res)
    //   this.products = res
    // })
    // this.productService.read3().subscribe(res => {
    //   this.products =res.data[0].produtos
    //   console.log(this.products)
    // })
    /* this.productService.read().subscribe(products => {
      this.products = products.filter(({category}) => category == "bebidas")
    }) */
    this.productService.read5().pipe(map(result => result.data[0].produtos)).subscribe(res => {
      console.log(res)
      this.products = res
    })
  }

}
