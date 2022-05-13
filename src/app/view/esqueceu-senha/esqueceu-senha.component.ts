import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CadastroClienteService } from 'src/app/core/services/cadastro-cliente.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.css']
})
export class EsqueceuSenhaComponent implements OnInit {

  form!: FormGroup;
  email!: string;

  get f(): any{
    return this.form.controls;
  }

  constructor(
    private fb: FormBuilder,
    private cadastroService: CadastroClienteService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.validation();
  }


  public validation(): void{
    this.form = this.fb.group({
      //cada um dos campos que tenho no model

      email: [
        '', [Validators.required, Validators.email]
      ],

    });
  }

  recuperarSenha() {
    const baseUrl = `${environment.API}resetar_senha/${this.email}`
    this.cadastroService.recuperaSenha(this.email, baseUrl)
    .subscribe( res => {
        this.toastr.success("Te enviamos um email com instruções!")
        this.router.navigate(['/login'])
      },
      error => {
        this.toastr.error("Opa algo deu errado, tente novamente.")
      })
  }

}
