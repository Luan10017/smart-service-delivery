import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'

import { Produto } from 'src/app/shared/models/Produto';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  products: Produto[] = [];


  constructor(private productService: MenuService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const categoriaURL = this.route.snapshot.url[0].path
    const baseUrl = `174.129.164.95:8080/produtos/categoria/${categoriaURL.toUpperCase()}`
    // const baseUrl = `http://localhost:8080/produtos/categoria/${categoriaURL.toUpperCase()}`

    this.productService.getItens(baseUrl).pipe(map(result => result.data[0].produtos))
    .subscribe(res => {
      this.products = res
    })

  }

}
