import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Produto } from 'src/app/classes/Produto';
import { MenuService } from 'src/app/menu.service';

@Component({
  selector: 'app-alcoolicas',
  templateUrl: './alcoolicas.component.html',
  styleUrls: ['./alcoolicas.component.css']
})
export class AlcoolicasComponent implements OnInit {

  products: Produto[] = [];
  baseUrl = "http://localhost:8080/produtos/categoria/BEBIDASALCOLICAS"

  constructor(private productService: MenuService) { }

  ngOnInit(): void {
    this.productService.getItens(this.baseUrl).pipe(map(result => result.data[0].produtos))
    .subscribe(res => {
      this.products = res
    })
  }

}
