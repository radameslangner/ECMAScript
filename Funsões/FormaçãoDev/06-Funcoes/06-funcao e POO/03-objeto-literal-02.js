const produto = {
    nome: 'iPad',
    marca: 'Apple',
    anoFabricacao: 2023,
    preco: 7500,
    fragil: true,
    desconto: 0.15,
}

function precoComDesconto(produto) {
    return produto.preco * ( 1 - produto.desconto)
}


const precoFinal = precoComDesconto(produto)
console.log(precoFinal)

