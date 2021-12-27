import { CompileShallowModuleMetadata } from '@angular/compiler';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if (usuario.nome === 'usuario@email.com' &&
      usuario.senha === '123') {

      this.usuarioAutenticado = true;
      window.localStorage.setItem("nome", usuario.nome)
      window.localStorage.setItem("senha", usuario.senha)
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/home']);

    } else {

      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false);

    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
