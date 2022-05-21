import { MenuService } from '../../core/services/menu.service';
import { Product } from '../../shared/models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: MenuService) { }

  ngOnInit(): void {
  }


}
