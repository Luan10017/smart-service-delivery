import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CadastroProdutosService } from './../../core/services/cadastro-produtos.service';
import { Produto } from '../../shared/models/Produto';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from 'src/app/core/services/menu.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  form!: FormGroup;
  produto: Produto = new Produto()
  categotias!: string[]
  formData = new FormData()

  id!: number
  edicao: boolean = false
  cadastro: boolean = true
  isLoading: boolean = false

  get f(): any {
    return this.form.controls;
  }

  constructor(
    private fb: FormBuilder,
    private cadastroService: CadastroProdutosService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private productService: MenuService
  ) { }

  ngOnInit(): void {
    this.validation();
    if (this.route.snapshot.url.length > 2) {
      this.edicao = true
      this.cadastro = false
      this.route.params.subscribe(res => this.id = res.id)

      const baseUrl = `${environment.API}produto/${this.id}`
      this.productService.getItens(baseUrl).pipe(map(result => result.data[0].produtos))
        .subscribe(res => {
          this.produto = res[0]
        })

    }

    this.productService.getCategorias(`${environment.API}categorias`)
      .subscribe(res => {
        this.categotias = res.data[0].categorias
      })

  }


  inputFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      const foto = event.target.files[0]

      this.formData.append('file', foto)
    }
  }

  fazerCadastro() {
    this.isLoading = true
    this.cadastroService.postItem(this.produto)
      .subscribe(res => {
        this.cadastroService.putItem(this.formData, res.data[0]['produtoId'])
          .subscribe(res => {
            this.rediretoIntoProductList()
          },
          error => {
            this.toastr.error("Opa algo deu errado, sua foto não foi salva.")
          })
      },
      error => {
        this.toastr.error("Opa algo deu errado, seu produto não foi cadastrado.")
      })
  }

  editarCadastro() {
    this.isLoading = true
    const payloadProduto = {
      categoria: this.produto.categoria,
      nome: this.produto.nome,
      preco: this.produto.preco,
      descricao: this.produto.descricao,
      estoque: this.produto.estoque
    }

    this.cadastroService.putProduto(payloadProduto, this.id)
      .subscribe( res => {
        if (this.formData.getAll("file").length) {
          this.cadastroService.putItem(this.formData, this.id)
            .subscribe(res => {
              this.rediretoIntoProductList()
            },
            error => {
              this.toastr.error("Opa algo deu errado, sua foto não foi salva.")
            })
        } else {
          this.rediretoIntoProductList()
        }
      },
      error => {
        this.toastr.error("Opa algo deu errado, seu produto não foi cadastrado.")
      })
  }

  rediretoIntoProductList(): void {
    this.toastr.success("Produto cadastrado com sucesso!")
    setTimeout(() => {
      this.router.navigate(['/admin/lista/produtos'])
    }, 3000)
  }

  changeValue(event: any) {
    this.produto.categoria = event.target.value
  }

  voltaParaLista() {
    this.router.navigate(['/admin/lista/produtos'])
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
