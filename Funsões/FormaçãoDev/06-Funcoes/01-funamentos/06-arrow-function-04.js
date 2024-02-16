
/* Arrow function com uma única sentença de código 
tem return automático sem a palavra reservada return */

const somar = (a=0, b=0) => a + b

console.log(somar(1, 2))
