import { Component, OnInit } from '@angular/core';

import { CadastroProdutosService } from './../../services/cadastro-produtos.service';
import { Produto } from '../../classes/Produto';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  form!: FormGroup;
  produto: Produto = new Produto()
  formData = new FormData()

  get f(): any {
    return this.form.controls;
  }

  constructor(private fb: FormBuilder, private cadastroService: CadastroProdutosService) { }

  ngOnInit(): void {
    this.validation();
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

  public validation(): void {

    this.form = this.fb.group({
      //cada um dos campos que tenho no model

      nomeProduto: [
        '', Validators.required
      ],
      categoria: [
        '', Validators.required
      ],
      descricao: [
        '', Validators.required
      ],
      preco: [
        '', Validators.required
      ],
      estoque: [
        '', Validators.required
      ],
      arquivo: [
        '', Validators.required
      ],

    });
  }

}
