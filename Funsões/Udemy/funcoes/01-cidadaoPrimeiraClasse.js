// Função em JS é First-Class Object (Citzens)
// higher-oder function
// função pode ser tratada como dado


// criar de forma literal  { bloco obrigatório }
function fun1(parametro, parametros) { bloco }

// Armazenar em uma variável como uma função anônima
const fun2 = function () {}

// Armazenar em um array
const array = [function (a, b){ return a + b }, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto, mesmo dinamicamente
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

//  Passar função como parametro
function run(fun){
    fun()
}

run(function () {console.log('Executando...')})

// Uma função pode retornar/conter outra função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)