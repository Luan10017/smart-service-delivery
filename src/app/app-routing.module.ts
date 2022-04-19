import { AdminComponent } from './admin/admin.component';
import { CadastroProdutoComponent } from './view/cadastro-produto/cadastro-produto.component';
import { LayoutComponent } from './template/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { CategoriasComponent } from './view/categorias/categorias.component';
import { AdministrativoComponent } from './view/administrativo/administrativo.component';

import { ProdutoComponent } from './view/produto/produto.component';
import { PagamentoComponent } from './view/pagamento/pagamento.component';
import { EnderecoComponent } from './view/endereco/endereco.component';
import { PedidoComponent } from './view/pedido/pedido.component';
import { AuthGuard } from './core/guards/auth.guard';
import { EsqueceuSenhaComponent } from './view/esqueceu-senha/esqueceu-senha.component';
import { RedefinirSenhaComponent } from './view/redefinir-senha/redefinir-senha.component';
import { ProgressBarComponent } from './shared/components/progress-bar/progress-bar.component';
import { QrCodeComponent } from './shared/components/qr-code/qr-code.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent  },
      { path: 'produto', component: ProdutoComponent },
      { path: 'pagamento', component: PagamentoComponent },
      { path: 'endereco', component: EnderecoComponent },
      { path: 'pedido', component: PedidoComponent },
      { path: 'hamburgers', component: CategoriasComponent },
      { path: 'porcoes', component: CategoriasComponent  },
      { path: 'bebidas', component: CategoriasComponent },
      { path: 'bebidasalcolicas', component: CategoriasComponent  },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
    // canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'cadastro/produtos', component: CadastroProdutoComponent },
      { path: 'editar/produtos', component: CadastroProdutoComponent },
      { path: 'acompanhar/produtos', component: ProgressBarComponent },
      { path: 'qrcode', component: QrCodeComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'dados-pessoais', component: CadastroComponent },
  { path: 'esqueceu-senha', component: EsqueceuSenhaComponent },
  { path: 'redefinir-senha', component: RedefinirSenhaComponent },
  { path: 'administrativo', component: AdministrativoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
