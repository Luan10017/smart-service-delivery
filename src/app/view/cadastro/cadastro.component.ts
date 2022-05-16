import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ValidatiorFields } from 'src/app/shared/helpers/ValidatiorFields';

import { Cliente } from '../../shared/models/Cliente';
import { CadastroClienteService } from './../../core/services/cadastro-cliente.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  form!: FormGroup;
  cliente: Cliente = new Cliente()
  id!: number 
  edicao: boolean = false 
  cadastro: boolean = true


  //toda vez que eu chamar o f ele já vai me chamar os
  // f do form control qq campo que eu quiser no cadastro do smart service
  get f(): any {
    return this.form.controls;
  }

  constructor(
    private fb: FormBuilder, 
    private cadastroService: CadastroClienteService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.validation();
    if (this.route.snapshot.url.length > 2) {
      this.edicao = true
      this.cadastro = false
      this.route.params.subscribe(res => this.id = res.id)
      
      const baseUrl = `${environment.API}usuario/${this.id}`

      this.cadastroService.getUser(baseUrl)
       .subscribe(res => {
        this.cliente = res.data[0]
      })
      }
  }

  fazerCadastro() {
    this.cadastroService.postItem(this.cliente)
      .subscribe(res => {
        this.toastr.success("Cadastro realizado com sucesso!")
        this.router.navigate(['/login'])
    },
    error => {
        this.toastr.error("Algo deu errado. Tente novamente!")
    })
  }

  editarCadastro() {
    const editUser = {...this.cliente}
    delete editUser.nivel_usuario
    
    this.cadastroService.patchUser(`${environment.API}edita/${this.cliente.email}`,editUser)
      .subscribe( res => {
        this.toastr.success("Cadastro atualizado com sucesso!")
      },
      error => {
        this.toastr.error("Algo deu errado. Tente novamente!")
      }
      )
  }

  changeValue(event: any) {
    this.cliente.estado = event.target.value
  }

  public validation(): void {

    const formOptions: AbstractControlOptions = {
      validators: ValidatiorFields.MustMatch('senha', 'confirmarSenha')
    };

    this.form = this.fb.group({
      //cada um dos campos que tenho no model

      nomeCompleto: [
        '', Validators.required
      ],
      email: [
        '', [Validators.required, Validators.email]
      ],
      senha: [
        '', Validators.required
      ],
      confirmarSenha: [
        '', Validators.required
      ],
      ddd: [
        '', Validators.required
      ],
      telefone: [
        '', Validators.required
      ],
      cep: [
        '', Validators.required
      ],
      logradouro: [
        '', Validators.required
      ],
      numero: [
        '', Validators.required
      ],
      complemento: [
        '', Validators.required
      ],
      bairro: [
        '', Validators.required
      ],
      cidade: [
        '', Validators.required
      ],
      estado: [
        '', Validators.required
      ],

    }, formOptions);
  }


}
