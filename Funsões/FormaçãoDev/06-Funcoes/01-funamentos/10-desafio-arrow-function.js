// fn -> 3 * 7
const multiplicar = (a,b) => a * b

// fn -> 3 + 7
const somar = (a, b) => a + b

// fn -> 3 - 7
const subtrair = (a, b) => a - b

// calcular(3)(7)(fn)
const calcular = (a) => (b) => (fn) => fn(a,b)

console.log(calcular(10)(20)(multiplicar))
console.log(calcular(10)(20)(somar))
console.log(calcular(100)(20)(subtrair))
