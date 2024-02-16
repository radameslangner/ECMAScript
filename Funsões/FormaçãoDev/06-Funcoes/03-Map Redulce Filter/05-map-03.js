const gritar = (texto) => texto.toUpperCase() 
const enfatizar = texto => texto + '!!!'
const exagerar = texto => texto.split('').join(' ')

const frases = [ 'Cuidado', 'Olha o carro']

const final = frases.map(gritar).map(exagerar).map(enfatizar)

console.log(final)


