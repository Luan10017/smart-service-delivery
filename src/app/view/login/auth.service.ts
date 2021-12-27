import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private usuarioAutenticado: boolean = false

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  url="http://localhost:8080/api/auth"
  autentica(usuario: Usuario): Observable<any> {
      return this.http.post(this.url, usuario)
  }


  fazerLogin(usuario: Usuario){
      this.autentica(usuario).subscribe(
      response => {
        this.usuarioAutenticado = true
        localStorage.setItem("usuarioAutenticado","true")
        localStorage.setItem("email",`${usuario.email}`)
        this.router.navigate(['/'])
      },
      error => {alert("email ou senha inválidos")}
    );
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado
  }
}
