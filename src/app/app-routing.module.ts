import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './navigation/home/home.component';
import { LoginComponent } from './navigation/login/login.component';
import { CadastroComponent } from './navigation/cadastro/cadastro.component';
import { ProdutoComponent } from './navigation/produto/produto.component';
import { MesaComponent } from './navigation/mesa/mesa.component';
import { PagamentoComponent } from './navigation/pagamento/pagamento.component';
import { EnderecoComponent } from './navigation/endereco/endereco.component';
import { PedidoComponent } from './navigation/pedido/pedido.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent,  },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'mesa', component: MesaComponent },
  { path: 'pagamento', component: PagamentoComponent },
  { path: 'endereco', component: EnderecoComponent },
  { path: 'pedido', component: PedidoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
