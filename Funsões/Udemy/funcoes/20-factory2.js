function criarProdutos(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
    
}

console.log(criarProdutos('Notebooke', 2199.49))
console.log(criarProdutos('ipad', 1999.49))