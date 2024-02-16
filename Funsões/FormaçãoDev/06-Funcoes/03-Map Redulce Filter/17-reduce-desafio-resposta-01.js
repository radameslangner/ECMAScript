const carrinho = [
    {nome: 'Caneta', qtde: 1, preco: 7.99, fragil: false},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome: 'Lápis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qtde: 10, preco: 19.20, fragil: false},
    {nome: 'Impressora', qtde: 5, preco: 1000, fragil: true},
    {nome: 'iPap', qtde: 2, preco: 7500, fragil: true},
    {nome: 'Computador', qtde: 2, preco: 5000, fragil: true}
]

// média dos produtos frágeis 5.000 + 15.000 + 10.000 / 3 = 10.000

// filter, map, redulce

// 1. frágil: true
const ehFragil = item => item.fragil

// 2. qtde * preco -> total
const totalItem = item => item.qtde * item.preco

// 3. media totais
const totalizador  = (total, valor) => total + valor


const itensfrageis = carrinho.filter(ehFragil)

const total = carrinho
    .filter(ehFragil)
    .map(totalItem)
    .reduce(totalizador)

const media = total / itensfrageis.length


console.log('Total: ', total)
console.log('Média: ', media)




