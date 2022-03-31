import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/classes/Produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.component.html',
  styleUrls: ['./administrativo.component.css']
})
export class AdministrativoComponent implements OnInit {

  public produtos: Produto[] = []
  //public produtosFiltrados: Produto[] = [];


  constructor(
      public produtosService: ProdutosService,
      private toastr: ToastrService,
  ) { }

  ngOnInit(): void {

    this.carregarProdutos();

  }

  public carregarProdutos(): void{

    this.produtosService.getProdutos().subscribe(
      (_produtos: Produto[]) => {
        this.produtos = _produtos,
        console.log(this.produtos),
        alert('muito bem, existe produtos')
      },
      error => {
        this.toastr.error('Erro ao Carregar os produtos', 'Erro!');
      },
      () => {
       //this.spinner.hide(); vou implementar o loading depois
      }
    );

  }


}
