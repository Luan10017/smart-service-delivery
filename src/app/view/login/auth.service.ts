import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private usuarioAutenticado: boolean = false

  constructor(
    private router: Router,
    private http: HttpClient,
    private toastr: ToastrService,
  ) { }

  url="http://localhost:8080/auth"
  autentica(usuario: Usuario): Observable<any> {
      return this.http.post(this.url, usuario)
  }


  fazerLogin(usuario: Usuario){
      this.autentica(usuario).subscribe(
      response => {
        const nomeUsuario = response.data[0].usuario
        const nivelUsuario = response.data[0].nivelUsuario

        this.usuarioAutenticado = true
        localStorage.setItem("usuarioAutenticado","true")
        localStorage.setItem("emailUsuario",`${usuario.email}`)
        localStorage.setItem("nomeUsuario",`${nomeUsuario}`)
        if ( nivelUsuario === "ADMINISTRADOR" ) {
          localStorage.setItem("isAdmin", "true")
        } else {
          localStorage.setItem("isAdmin", "false")
        }
        this.router.navigate(['/'])
      },
      error => {
        this.toastr.error("emial ou senha invalidos")
      }
    );
  }

  selectTable(table: String, userName: String){
    this.usuarioAutenticado = true
    localStorage.setItem("usuarioAutenticado","true")
    localStorage.setItem("nomeUsuario",`${userName}`)
    this.router.navigate(['/'])
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado
  }
}
