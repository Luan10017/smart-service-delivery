import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { CadastroProdutosService } from 'src/app/services/cadastro-produtos.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Produto } from 'src/app/classes/Produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  form!: FormGroup;
  produto: Produto = new Produto()
  formData = new FormData()

  get f(): any {
    return this.form.controls;
  }

  constructor(
    private fb: FormBuilder,
    private cadastroService: CadastroProdutosService,
    private toastr: ToastrService,
    private router: Router
    ) { }



  ngOnInit(): void {
    this.validation();
  }

  inputFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      const foto = event.target.files[0]

      this.formData.append('file', foto)
    }
  }

  //Aqui irei mudar para Editar depois, que será diferente de CADASTRAR!
  fazerCadastro() {
    this.cadastroService.postItem(this.produto)
      .subscribe(res => {
        this.cadastroService.putItem(this.formData, res.data[0]['produtoId'])
          .subscribe(res => {
            this.toastr.success("Produto cadastrado com sucesso!")
            setTimeout( () => {
              this.router.navigate(['/bebidas'])
            },3000)
          })
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
