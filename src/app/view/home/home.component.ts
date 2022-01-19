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

  //carrousel fotos e intervalo
  myInterval = 1500;
  activeSlideIndex = 0;
  slides: {image: string; text?: string}[] = [
    {image: 'assets/home/carousel1.jpg'},
    {image: 'assets/home/carousel2.jpeg'},
    {image: 'assets/home/almoco.jpeg'}
  ];

  constructor(private productService: MenuService) { }

  ngOnInit(): void {
    // this.productService.read().subscribe(products => {
    //   this.products = products
    // })
  }


}
