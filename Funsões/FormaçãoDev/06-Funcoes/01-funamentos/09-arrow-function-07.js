// somar(3)(4)(5)

// const somar = a => {
//     return b => {
//         return c => {
//             return a + b + c
//         }
//     }
// }

// const somar = a => {
//         return b => c => a + b + c
// }

// Pode remover ( ) para um parâmetro
const somar = a => b => c => a + b + c
    

console.log(somar(13)(14)(15))

const subtrair = (a,b) => a - b
const bomDia = () => 'Bom dia!'

console.log(subtrair(7, 5))
console.log(bomDia())