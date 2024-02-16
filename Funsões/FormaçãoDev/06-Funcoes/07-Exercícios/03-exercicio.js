/*

crie uma função que recebe um objeto como parâmetro e retorna um segundo objeto com as chaves e valores do primeiro objeto invertidas

*/

function trocaChavevalor(){
    let objetoRetorno = {}
    let conteudoObjeto = Object.entries(objeto)
    // console.log(conteudoObjeto)
    for(par of conteudoObjeto){
        // console.log(par)
        objetoRetorno[par[1]] = par[0]
    }
    return objetoRetorno
}

const objeto ={nome: "radamés", idade: 46, id: "8745"}

const objetoInvertido = trocaChavevalor(objeto)

console.log(objeto)
console.log(objetoInvertido)