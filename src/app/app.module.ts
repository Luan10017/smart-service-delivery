import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './view/login/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';

import { HttpClientModule } from '@angular/common/http';
import { HamburgerComponent } from './view/hamburger/hamburger.component';
import { PorcoesComponent } from './view/porcoes/porcoes.component';
import { BebidasComponent } from './view/bebidas/bebidas.component';
import { AlcoolicasComponent } from './view/alcoolicas/alcoolicas.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EsqueceuSenhaComponent } from './view/esqueceu-senha/esqueceu-senha.component';
import { RedefinirSenhaComponent } from './view/redefinir-senha/redefinir-senha.component';
import { CadastroProdutoComponent } from './view/cadastro-produto/cadastro-produto.component';
import { ToastrModule } from 'ngx-toastr';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DadosPessoaisComponent } from './view/dados-pessoais/dados-pessoais.component';
import { AdministrativoComponent } from './view/administrativo/administrativo.component';
import { EditarProdutoComponent } from './view/editar-produto/editar-produto.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    HamburgerComponent,
    PorcoesComponent,
    BebidasComponent,
    AlcoolicasComponent,
    EsqueceuSenhaComponent,
    RedefinirSenhaComponent,
    CadastroProdutoComponent,
    DadosPessoaisComponent,
    AdminComponent,
    AdministrativoComponent,
    EditarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true
    }),
    BsDropdownModule.forRoot()
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
