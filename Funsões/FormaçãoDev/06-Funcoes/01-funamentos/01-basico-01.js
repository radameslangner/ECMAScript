const a = 4

// log() é uma função do objeto console
console.log(a)

// Function declaration
function bomDia(){
    console.log('Bom dia!')
}
// Chamada da função
bomDia()

// Function expression
const boaTarde = function (){
    console.log('Boa tarde!')
}

boaTarde() // undefined

function somar (a = 0 , b = 0){
    return a + b
}

let resultado = somar(3, 4)
console.log(resultado)

resultado = somar(3)
console.log(resultado)


resultado = somar(3, 4, 5, 6, 7, 8, 9)
console.log(resultado)


resultado = somar()
console.log(resultado)