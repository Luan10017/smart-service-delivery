import { CadastroService } from './cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Cadastro } from './cadastro';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatiorFields } from 'src/app/helpers/ValidatiorFields';

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
  get f(): any{
    return this.form.controls;
  }

  constructor(private fb: FormBuilder, private cadastroService: CadastroService) { }

  ngOnInit(): void {
    this.validation();
  }

  inputFileChange(event: any) {
    if(event.target.files && event.target.files[0]) {
      const foto = event.target.files[0]

      const formData = new FormData()
      formData.append('file',foto)
      
      this.cadastroService.ok({ "categoria": "PODRAO", "nome": "Hamburguer", "preco": "12.99", "descricao": "xxxxxxxxxxxxxxxxxxxxxxxx", "estoque": "20" }).subscribe(res =>{
        this.cadastroService.putItem(formData,res.data[0]['produtoId']).subscribe(res => console.log(res))
    })
    }
  }

  fazerCadastro(){
    console.log(this.cadastro)
    this.cadastroService.ok({ "categoria": "PODRAO", "nome": "Hamburguer", "preco": "12.99", "descricao": "xxxxxxxxxxxxxxxxxxxxxxxx", "estoque": "20" }).subscribe(res =>{
        this.cadastroService.putItem({},res.data[0]['produtoId'])
        console.log(res.data[0]['produtoId'])
    })
  }

  public validation(): void{

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
