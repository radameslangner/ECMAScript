
const executar = (fn) => fn()

const bomDia = () => 'Bom dia!'
const bomTarde = () => 'Bom tarde!'

const resultado1 = executar(bomDia)
console.log(resultado1)


const resultado2 = executar(bomTarde)
console.log(resultado2)