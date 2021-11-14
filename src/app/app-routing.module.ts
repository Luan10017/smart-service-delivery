import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { HamburgerComponent } from './view/hamburger/hamburger.component';
import { AlcoolicasComponent } from './view/alcoolicas/alcoolicas.component';
import { BebidasComponent } from './view/bebidas/bebidas.component';
import { PorcoesComponent } from './view/porcoes/porcoes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,  },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'hamburger', component: HamburgerComponent },
  { path: 'porcoes', component: PorcoesComponent },
  { path: 'bebidas', component: BebidasComponent },
  { path: 'alcoolicas', component: AlcoolicasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
