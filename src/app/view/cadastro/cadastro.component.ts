import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ValidatiorFields } from 'src/app/helpers/ValidatiorFields';

import { Cadastro } from '../../classes/cadastro';
import { CadastroClienteService } from './../../services/cadastro-cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  form!: FormGroup;
  cadastro: Cadastro = new Cadastro()

  //toda vez que eu chamar o f ele já vai me chamar os
  // f do form control qq campo que eu quiser no cadastro do smart service
  get f(): any {
    return this.form.controls;
  }

  constructor(
    private fb: FormBuilder, 
    private cadastroService: CadastroClienteService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.validation();
  }

  fazerCadastro() {
    this.cadastroService.postItem(this.cadastro)
      .subscribe(res => {
        this.toastr.success("Cadastro realizado com sucesso!")
        this.router.navigate(['/login'])
    },
    error => {
        this.toastr.error("Algo deu errado. Tente novamente!")
    })
  }

  changeValue(event: any) {
    this.cadastro.estado = event.target.value
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
