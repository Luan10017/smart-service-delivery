import { CadastroService } from './cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Cadastro } from './cadastro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastro: Cadastro = new Cadastro()

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
  }

  fazerCadastro(){
    this.cadastroService.ok(this.cadastro)
  }

}
