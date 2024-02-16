/*
 Dados dois arrays de números [a,b] e [d,e] crie uma função que faça a multiplicação do primeiro array com o segundo de maneira distributiva e a imprima na tela, ou seja, (a*d), (a*e),(b*d) (d*e). A função deve ser capaz de receber como parâmetros arrays de qualquer tamanho e não só com dois parâmetros.
 */

 function multiplicacaoDistributiva(array1, array2){

    let novoArray = []

    for(let i = 0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++){
            console.log(`${array1[i]} * ${array2[j]} = ${array1[i] * array2[j]}`)

            novoArray.push(array1[i] * array2[j])
        }
    }
    console.log(novoArray)
 }

const array1 = [1,2,3,4,5,6]
const array2 = [10,100]

multiplicacaoDistributiva(array1, array2)