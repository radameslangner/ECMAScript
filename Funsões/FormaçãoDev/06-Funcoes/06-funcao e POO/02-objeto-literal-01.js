const produto = {
    nome: 'iPad',
    marca: 'Apple',
    anoFabricacao: 2023,
    preco: 7500,
    fragil: true,
    desconto: 0.15,
    precoComDesconto: function() {
        return this.preco * ( 1 - this.desconto)
    }
}

const precoFinal = produto.precoComDesconto()
console.log(precoFinal)

console.log(`${produto.nome} tem preço Final de R$ ${precoFinal}`)