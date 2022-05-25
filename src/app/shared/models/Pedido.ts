export class Pedido {
    id_pedido!: string
    codigo_pedido!: string
    nome_cliente!: string 
    email_cliente!: string 
    endereco!: Endereco
    produtos!: Array<Produtos> 
    observacao!: string
    forma_pagamento!: number
    valor_total!: string
    data_pedido!: Date
}

export class Endereco {
    logradouro!: string
    numero!: string
    bairro!: string
    complemento!: string
    cidade!: string
    estado!: string
    cep!: string
}

export class Produtos {
    nome!: string
    quantidade!: string
}

