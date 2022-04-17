import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.carregarUsuario();
  }

  private carregarUsuario(): void{

  }

}
