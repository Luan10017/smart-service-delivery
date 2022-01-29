import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'

import { Produto } from './../../classes/Produto';
import { MenuService } from 'src/app/menu.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  products: Produto[] = [];
  baseUrl = "http://localhost:8080/produtos/categoria/BEBIDAS"

  constructor(private productService: MenuService) { }

  ngOnInit(): void {
   
    this.productService.getItens(this.baseUrl).pipe(map(result => result.data[0].produtos))
    .subscribe(res => {
      this.products = res
    })
    
  }

}
