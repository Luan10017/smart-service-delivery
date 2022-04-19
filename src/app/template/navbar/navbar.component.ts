import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrinho } from 'src/app/shared/models/carrihno';
import { CarrinhoService } from 'src/app/core/services/carrinho.service';
import { FormsModule }   from '@angular/forms';
import { Produto } from 'src/app/shared/models/Produto';
import { ProdutosService } from 'src/app/core/services/produtos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;


  carrinho: Carrinho = new Carrinho();
  nomeUsuario: string = 'Anônimo'

  //@Input() products: any;
  public products: any = [];
  _filtroProdutos: string = '';

  public get filtroProdutos(): string{
    return this._filtroProdutos;
  }

  public set filtroProdutos(value: string){
    this._filtroProdutos = value;
    this.products = this._filtroProdutos ? this.filtrarProdutos(this._filtroProdutos) : this.products
  }

  public filtrarProdutos(filtrarPor: string): any{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.products.filter(
       //product => product.tema.toLocaleLowerCase().indexOf(filtrarPor) !==
    );
  }


  constructor(
    private router: Router ,
    private carrinhoService: CarrinhoService,
    private http: HttpClient,
    private produtosService: ProdutosService
    ) { }

  ngOnInit(): void {
    this.carrinho = this.carrinhoService.carrinho

    if ( localStorage.getItem("nomeUsuario")) {
      this.nomeUsuario = localStorage.getItem("nomeUsuario") as string
      let handleName = this.nomeUsuario.toLowerCase()
      handleName = handleName[0].toUpperCase() + handleName.slice(1)
      this.nomeUsuario = handleName
    }

    this.getProducts();
  }

  public getProducts(): void {
    this.http.get('http://localhost:8080/produtos').subscribe(
      response => {
        this.products = response;
        this._filtroProdutos= this.products;
        console.log("teste" + this._filtroProdutos);
      },
      error => console.log(error)
    );
  }

  showMenu(): boolean{
    return this.router.url !== '/user/login';
  }

  atualizaTotal(): void {
    this.carrinhoService.atualizaTotal()
  }

}
