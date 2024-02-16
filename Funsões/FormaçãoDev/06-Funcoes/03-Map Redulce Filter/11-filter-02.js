const carrinho = [
    {nome: 'Caneta', qtde: 1, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lápis', qtde: 0, preco: 5.82},
    {nome: 'Tesoura', qtde: 10, preco: 19.20}
]

const qtdeMaiorQueZero = produto => produto.qtde > 0
const apenasnome = produto => produto.nome

const carrinhoFinal = carrinho
.filter(qtdeMaiorQueZero)

console.log(carrinhoFinal)