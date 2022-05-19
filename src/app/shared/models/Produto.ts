export class Produto {
    id!: string
    categoria!: string 
    nome!: string 
    preco!: number
    descricao!: string
    estoque!: number
    imgUrl!: string
}

export class Categoria {
    id!: string
    nome!: string
}