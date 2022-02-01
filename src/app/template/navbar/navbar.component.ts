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
  nomeUsuario: string = 'Anônimo'

  constructor(private router: Router , private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.carrinho = this.carrinhoService.carrinho
    
    if ( localStorage.getItem("nomeUsuario")) {
      this.nomeUsuario = localStorage.getItem("nomeUsuario") as string
      let handleName = this.nomeUsuario.toLowerCase()
      handleName = handleName[0].toUpperCase() + handleName.slice(1)
      this.nomeUsuario = handleName
    }
  }

  showMenu(): boolean{
    return this.router.url !== '/user/login';
  }

  atualizaTotal(): void {
    this.carrinhoService.atualizaTotal()
  }

}
