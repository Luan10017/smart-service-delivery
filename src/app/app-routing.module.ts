import { AdminComponent } from './admin/admin.component';
import { CadastroProdutoComponent } from './view/cadastro-produto/cadastro-produto.component';
import { LayoutComponent } from './template/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { HamburgerComponent } from './view/hamburger/hamburger.component';
import { AlcoolicasComponent } from './view/alcoolicas/alcoolicas.component';
import { BebidasComponent } from './view/bebidas/bebidas.component';
import { PorcoesComponent } from './view/porcoes/porcoes.component';
import { DadosPessoaisComponent } from './view/dados-pessoais/dados-pessoais.component';
import { AdministrativoComponent } from './view/administrativo/administrativo.component';

import { ProdutoComponent } from './view/produto/produto.component';
import { MesaComponent } from './view/mesa/mesa.component';
import { PagamentoComponent } from './view/pagamento/pagamento.component';
import { EnderecoComponent } from './view/endereco/endereco.component';
import { PedidoComponent } from './view/pedido/pedido.component';
import { AuthGuard } from './guards/auth.guard';
import { EsqueceuSenhaComponent } from './view/esqueceu-senha/esqueceu-senha.component';
import { RedefinirSenhaComponent } from './view/redefinir-senha/redefinir-senha.component';
import { EditarProdutoComponent } from './view/editar-produto/editar-produto.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent  },
      { path: 'produto', component: ProdutoComponent },
      { path: 'mesa', component: MesaComponent },
      { path: 'pagamento', component: PagamentoComponent },
      { path: 'endereco', component: EnderecoComponent },
      { path: 'pedido', component: PedidoComponent },
      { path: 'hamburger', component: HamburgerComponent },
      { path: 'porcoes', component: PorcoesComponent },
      { path: 'bebidas', component: BebidasComponent },
      { path: 'alcoolicas', component: AlcoolicasComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
    // canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'cadastro/produtos', component: CadastroProdutoComponent },
      { path: 'editar/produtos', component: EditarProdutoComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'dados-pessoais', component: DadosPessoaisComponent },
  { path: 'esqueceu-senha', component: EsqueceuSenhaComponent },
  { path: 'redefinir-senha', component: RedefinirSenhaComponent },
  { path: 'administrativo', component: AdministrativoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
