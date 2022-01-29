export class ProdutoCarrinho {
    id!: string 
    nome!: string 
    preco!: number 
    quantidade: number = 1
    realizado!: boolean

}

export class Carrinho {
    
    itens: ProdutoCarrinho[] = []
    pago: boolean = false

    get length(): number {
        return this.itens.length
    }

} 

