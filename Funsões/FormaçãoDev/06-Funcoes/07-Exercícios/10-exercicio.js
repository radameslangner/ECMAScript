//Calcular os dígitos validadores de um CPF

//Parte 1 - gerar um array os 9 primeiros números de forma aleatória

function digitosAleatorios(){
    let numerosAleatorios = []

    for(let i = 0; i < 9; i++ ){
        let n = Math.trunc(Math.random() * 9)
        // console.log(n)
        numerosAleatorios.push(n)
    }
    // console.log(numerosAleatorios)

    let acumulador = 0
    for(let i = 10; i > 1; i--){
        let mult = numerosAleatorios[10 - i] * i
        acumulador += mult
    }
    let primeiroDigito = 11 - (acumulador%11)

    let cpf = [...numerosAleatorios, primeiroDigito]

    // console.log("cpf: ", cpf)

    acumulador = 0
    for(let i = 11; i > 2; i--){
        let mult = cpf[11-i] * i
        acumulador+=mult
    }

    let segundoDigito = 11 - (acumulador%11)

    cpf.push(segundoDigito >= 10 ? 0 : segundoDigito)

    console.log("cpf: ", cpf)


}



const cpfAleatorio = digitosAleatorios();
