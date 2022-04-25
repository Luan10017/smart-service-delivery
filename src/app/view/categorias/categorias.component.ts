import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'

import { Produto } from 'src/app/shared/models/Produto';
import { MenuService } from 'src/app/core/services/menu.service';
import { environment } from 'src/environments/environment';

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
    const baseUrl =  `${environment.API}produtos/categoria/${categoriaURL.toUpperCase()}`

    this.productService.getItens(baseUrl).pipe(map(result => result.data[0].produtos))
    .subscribe(res => {
      this.products = res
    })

  }

}
