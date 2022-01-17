import { Product } from './../../classes/Product';
import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro/cadastro.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produto: Product = new Product()
  formData = new FormData()

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
  }


  inputFileChange(event: any) {
    if(event.target.files && event.target.files[0]) {
      const foto = event.target.files[0]

      const formData = new FormData()
      this.formData.append('file',foto)
      formData.append('file',foto)
      console.log(this.formData, formData, foto)
      this.cadastroService.ok(this.produto).subscribe(res =>{
        this.cadastroService.putItem(this.formData,res.data[0]['produtoId']).subscribe(res => console.log(res))
    })
    }
  }

  fazerCadastro(){
    console.log(this.produto,this.formData)
    this.cadastroService.ok(this.produto).subscribe(res =>{
        this.cadastroService.putItem(this.formData,res.data[0]['produtoId'])
        console.log(res.data[0]['produtoId'])
    })
  }
}
