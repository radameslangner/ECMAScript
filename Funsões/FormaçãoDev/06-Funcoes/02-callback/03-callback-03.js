const path = require('path')
const fs = require('fs')

console.log(__dirname + '/dados/aprovados.txt')

const caminho = path.join(__dirname, '..', 'dados', 'aprovados.txt')

console.log(caminho)

// Pode usar _ no lugar do parâmetro erro para não retornar erro

function lerArquivo(erro, conteudo){
    console.log(erro)
    console.log(conteudo.toString())
}
 
// fs.readFile(caminho, lerArquivo)
// console.log('Fim #1')

const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim #2')



