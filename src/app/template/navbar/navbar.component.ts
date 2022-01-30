import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { Carrinho } from 'src/app/classes/carrihno';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;

  carrinho: Carrinho = new Carrinho(); 

  constructor(private router: Router , private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.carrinho = this.carrinhoService.carrinho
  }

  showMenu(): boolean{
    return this.router.url !== '/user/login';
  }

}
