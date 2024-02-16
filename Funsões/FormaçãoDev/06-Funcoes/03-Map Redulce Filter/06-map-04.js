const carrinho = [
    {nome: 'Caneta', qtde: 1, preco: 7.99},
    {nome: 'Impressora', qtde: 4, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lápis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 10, preco: 19.20}
]

const apenasNome = produto => produto.nome
const calculatotal = produto => produto.qtde * produto.preco

const nomePreco = produto => `${produto.nome}, ' ', ${produto.qtde * produto.preco}`


console.log(carrinho.map(apenasNome))
console.log(carrinho.map(calculatotal))
console.log(carrinho.map(nomePreco))

