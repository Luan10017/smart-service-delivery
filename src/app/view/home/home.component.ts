import { MenuService } from '../../core/services/menu.service';
import { Product } from '../../shared/models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //carrousel fotos e intervalo
  myInterval = 1500;
  activeSlideIndex = 0;
  slides: {image: string; text?: string}[] = [
    {image: 'assets/home/home.jpg'},
    {image: 'assets/home/slide-2.jpg'},
    {image: 'assets/home/slide-3.jpg'},
    {image: 'assets/home/slide-4.jpg'},
    {image: 'assets/home/slide-5.jpg'},
    {image: 'assets/home/slide-1.jpg'}
  ];

  constructor(private productService: MenuService) { }

  ngOnInit(): void {
  }


}
