// implementando nosso próprio filter 

// Array.prototype.fraseLegal = 'Vc é fera!!!'

Array.prototype.meuFilter = function(fn){
    // console.log(this)
    if(typeof fn !== 'function')  return []
    const novoArray = []
    for (let i = 0; i < this.length; i++){
        if (fn(this[i], i, this)){
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const maiorOuIgualA4 = numero => numero >= 4
const numeros = [ 1, 2, 3, 4, 5]

console.log('filter', numeros.filter(maiorOuIgualA4))

console.log('meuFilter', numeros.meuFilter(maiorOuIgualA4))

console.log('meuFilter', numeros.meuFilter(2))
