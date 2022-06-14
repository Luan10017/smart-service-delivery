import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'

import { Produto } from 'src/app/shared/models/Produto';
import { MenuService } from 'src/app/core/services/menu.service';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  products: Produto[] = [];
  categoriaURL!: string
  categoriaName!: string


  constructor(private productService: MenuService,
              private route: ActivatedRoute,
              private spinner: NgxSpinnerService
              ) { }


  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide()
    }, 5000);

    this.categoriaURL = this.route.snapshot.url[0].path.toUpperCase()
    this.categoriaName = this.categoriaURL[0] + this.categoriaURL.slice(1).toLowerCase()
    const baseUrl =  `${environment.API}produtos/categoria/${this.categoriaURL}`

     this.productService.getItens(baseUrl).pipe(map(result => result.data[0].produtos))
    .subscribe({
       next:(res) => {
          this.products = res.filter(({estoque}) => estoque > 0)
       },
       error: (error: any) => console.log(error),
       complete: () => this.spinner.hide()

    })

    /*this.productService.getItens(baseUrl).pipe(map(result => result.data[0].produtos))
    .subscribe(res => {
      this.products = res.filter(({estoque}) => estoque > 0)
    })*/

  }

}
