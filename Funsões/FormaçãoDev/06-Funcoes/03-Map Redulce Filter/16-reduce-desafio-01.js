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
// 2. qtde * preco -> total
// 3. media totais


const fragil = produto => produto.fragil === true // pode omitir a === 

const total = produto => produto.qtde * produto.preco


let n=0
const media = (total, valor) =>  {
 
    n++
    console.log('total : ' , total)
    console.log('valor : ' , valor)
    console.log('n : ' , n)

    total = total + valor
    console.log('total : ' , total)
    return  total 
}

const itensfrageis = carrinho.filter

const resultado = carrinho
    .filter(fragil)
    .map(total)
    .reduce(media, 0)/n
    
    
console.log(resultado)
    
    
    