class Data {
    constructor(dia, mes, ano){

        this.dia = dia
        this.mes = mes
        this.ano =ano

    }
    exibir = function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d1 = new Data("Opa", 79, -689)
d1.ano = false

console.log(d1.exibir())
