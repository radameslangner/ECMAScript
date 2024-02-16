/*

Escreva uma função que recebe um objeto como primeiro parâmetro e como segundo parâmetro o nome de uma propriedade. Caso a propriedade não exista no primeiro objeto retorne o objeto original. Caso a priprieade exista, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro.

*/


const pessoa ={
    nome: "radamés",
    idade: 46
}

function objRetorno(objeto, propriedade){
    // console.log(objeto[propriedade])
    if (objeto[propriedade]){
        console.log("existe")
        let objetoCopia = {...objeto}
        delete objetoCopia[propriedade]
        return objetoCopia
    } else {
        return objeto
    }

}
console.log(pessoa)

const pessoaAtualizada = objRetorno(pessoa, "idade")

console.log(pessoaAtualizada)