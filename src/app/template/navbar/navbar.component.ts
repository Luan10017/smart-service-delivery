import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrinho } from 'src/app/shared/models/carrihno';
import { CarrinhoService } from 'src/app/core/services/carrinho.service';
import { FormsModule }   from '@angular/forms';
import { Produto } from 'src/app/shared/models/Produto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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


  isCollapsed = true;


  carrinho: Carrinho = new Carrinho();
  nomeUsuario: string = 'Cliente01'
  // nomeUsuario: string = 'Anônimo'

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
    this.http.get(`${environment.API}produtos`).subscribe(
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
