// const primeiroElemento = arrayOuString => arrayOuString[0]
// const letraMinuscula = letra => letra.toLowerCase()
// const promessa = new Promise(resolve => {
//     resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
// })

// promessa
// .then(primeiroElemento)
// .then(primeiroElemento)
// .then(letraMinuscula)
// .then(console.log)

// console.log('Fim!')


const promessa = new Promise(function (resolve){ console.log('Função resolve')})

promessa.then(param => console.log(param))