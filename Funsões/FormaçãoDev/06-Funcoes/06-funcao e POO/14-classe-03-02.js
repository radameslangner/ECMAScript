class Data {
   #dia = 1
   #mes = 1 
   #ano = 1970

   getDia(){
      return this.#dia
   }

   setDia(novoDia){
      if (novoDia>= 1 && novoDia <= 31) {
         this.#dia = novoDia
      }
   }

   getMes(){
      return this.#mes
   }

   setMes(novoMes){
      if (novoMes>= 1 && novoMes <= 12) {
         this.#mes = novoMes
      }
   }

   getAno(){
      return this.#ano
   }

   setAno(novoAno){
      if (novoAno > 0) {
         this.#ano = novoAno
      }
   }   

   exibir() {
    return `${this.#dia}/${this.#mes}/${this.#ano}`
   }

}

const d1 = new Data()

// d1.dia = "cuidado"
d1.setDia('Blabla')
d1.setDia(30)

console.log(d1.exibir(), d1)


console.log(d1.getDia())
