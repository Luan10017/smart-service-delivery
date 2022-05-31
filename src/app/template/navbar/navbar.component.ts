import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrinho } from 'src/app/shared/models/carrihno';
import { CarrinhoService } from 'src/app/core/services/carrinho.service';
import { FormsModule }   from '@angular/forms';
import { Categoria, Produto } from 'src/app/shared/models/Produto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MenuService } from 'src/app/core/services/menu.service';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;
  categorias: Categoria[] = []
  baseUrl = `${environment.API}categorias`
  categotias!: string[]


  carrinho: Carrinho = new Carrinho();
  nomeUsuario: string = 'Anônimo'
  idUsuario: string = ''
  isAdmin: boolean = false

  //@Input() products: any;
  public products: any = [];
  _filtroProdutos: string = '';



  constructor(
    private router: Router ,
    private carrinhoService: CarrinhoService,
    private http: HttpClient,
    private authService: AuthService
    ) { }

  ngOnInit(): void {

    this.carrinho = this.carrinhoService.carrinho

    if ( localStorage.getItem("nomeUsuario")) {
      this.nomeUsuario = localStorage.getItem("nomeUsuario") as string
      let handleName = this.nomeUsuario.toLowerCase()
      handleName = handleName[0].toUpperCase() + handleName.slice(1)
      this.nomeUsuario = handleName
    }

    if ( localStorage.getItem("idUsuario") ) {
      this.idUsuario = String(localStorage.getItem("idUsuario"))
    }

    if ( localStorage.getItem("isAdmin") === "true" ) {
      this.isAdmin = Boolean(localStorage.getItem("isAdmin"))
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

  vaiParaEditarCadastro(): void {
    this.router.navigate([`/editar/cadastro/${this.idUsuario}`])
  }

  fazerLogoff(): void {
    this.authService.fazerLogoff()
  }
}
