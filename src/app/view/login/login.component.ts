import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario()
  form!: FormGroup;

  get f(): any{
    return this.form.controls;
  }

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validation();
  }

  fazerLogin(){
    this.authService.fazerLogin(this.usuario)
  }

  public validation(): void{
    this.form = this.fb.group({
      //cada um dos campos que tenho no model

      email: [
        '', [Validators.required, Validators.email]
      ],
      senha: [
        '', Validators.required,
      ],

    });
  }


}
