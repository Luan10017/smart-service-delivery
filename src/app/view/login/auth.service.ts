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
        this.usuarioAutenticado = true
        localStorage.setItem("usuarioAutenticado","true")
        localStorage.setItem("email",`${usuario.email}`)
        this.router.navigate(['/'])
      },
      error => {
        this.toastr.error("emial ou senha invalidos")
      }
    );
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado
  }
}
