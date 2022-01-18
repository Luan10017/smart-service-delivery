import { Component, OnInit } from '@angular/core';

import { CadastroProdutosService } from './../../services/cadastro-produtos.service';
import { Produto } from '../../classes/Produto';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  formData = new FormData()

  constructor(private cadastroService: CadastroProdutosService) { }

  ngOnInit(): void {
  }


  inputFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      const foto = event.target.files[0]

      this.formData.append('file', foto)
    }
  }

  fazerCadastro() {
    this.cadastroService.postItem(this.produto)
      .subscribe(res => {
        this.cadastroService.putItem(this.formData, res.data[0]['produtoId'])
          .subscribe(res => console.log(res))
      })
  }
}
