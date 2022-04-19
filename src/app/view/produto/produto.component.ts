import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  @Input() products: any;

  produto = {} as Product;

  constructor() { }

  ngOnInit(): void {

  }


}
