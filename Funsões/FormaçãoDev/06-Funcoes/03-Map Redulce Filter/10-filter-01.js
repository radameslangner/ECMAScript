const numeroPar = numero => numero % 2 === 0

const numeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const pares1 = numeros.filter(numeroPar)

const pares2 = numeros.filter(el => true)
const pares3 = numeros.filter(el => false)

console.log(pares1)
console.log(pares2)
console.log(pares3)