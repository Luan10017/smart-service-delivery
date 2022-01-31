import { Produto } from './../classes/Produto';
import { Injectable } from '@angular/core';

import { Carrinho, ProdutoCarrinho } from 'src/app/classes/carrihno';


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  produtoCarrinho: ProdutoCarrinho = new ProdutoCarrinho() 
  carrinho: Carrinho = new Carrinho(); 


  constructor() { }


  adicionarAoCarrinho(produto: Produto): void {
    const produtoCarrinho: ProdutoCarrinho = new ProdutoCarrinho() 
    produtoCarrinho.id = produto.id
    produtoCarrinho.nome = produto.nome
    produtoCarrinho.preco = produto.preco
    produtoCarrinho.realizado = false

    const itenExiste = this.itemExiste(produtoCarrinho)

    if (itenExiste === -1) {
      this.carrinho.itens.push(produtoCarrinho)
    } else {
      this.carrinho.itens[itenExiste].quantidade ++
    }

    this.atualizaTotal()

    this.atualizaCarrinho()
  }

  tiraItem(produto: ProdutoCarrinho): void {
    const itenExiste = this.itemExiste(produto)

    if (itenExiste !== -1) {
      this.carrinho.itens[itenExiste].quantidade --
      this.atualizaTotal()
      this.atualizaCarrinho()
    } 
  }

  /* 
      Recebe os dados do carrinho no localStorage e faz a atualização da instancia do objeto carrinho
      para manipulação dos dados.
  */
  carregaCarrinhoLocalStorage(carrinho: any): void {
    carrinho.itens.forEach((iten:any) => {
      const produtoCarrinho: ProdutoCarrinho = new ProdutoCarrinho() 

      produtoCarrinho.id = iten.id
      produtoCarrinho.nome = iten.nome
      produtoCarrinho.preco = iten.preco
      produtoCarrinho.quantidade = iten.quantidade
      produtoCarrinho.realizado = iten.realizado

      this.carrinho.itens.push(produtoCarrinho)
    })
  }



  // Verifica de produto já está no carrinho pelo id. Se existir retorna o index, senão -1
  itemExiste(produto: ProdutoCarrinho) :number {
    for (let i=0;i < this.carrinho.length; i++) {
      if (this.carrinho.itens[i].id === produto.id) {
        return i
      }
    }
    return -1
  }


  /* 
      Atualiza valor total do carrinho
  */
  atualizaTotal(): void {
    let valorTotal = 0
    
    for (let i=0; i < this.carrinho.length; i++) {
      valorTotal += this.carrinho.itens[i].quantidade * this.carrinho.itens[i].preco
    }
    this.carrinho.total = valorTotal
  }


  //Salva estado do carrinho no localStorage
  atualizaCarrinho() :void {
    localStorage.setItem("carrinho",JSON.stringify(this.carrinho))
  }

}
