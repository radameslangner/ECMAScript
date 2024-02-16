class Data {
   #dia = 1
   #mes = 1 
   #ano = 1970

// Getters 

   get dia(){  return this.#dia  }
   get mes(){  return this.#mes  }
   get ano(){  return this.#ano  }

// Setters
   set dia(novoDia){
      if (novoDia>= 1 && novoDia <= 31) {
         this.#dia = novoDia
      }
   }


   set mes(novoMes){
      if (novoMes>= 1 && novoMes <= 12) {
         this.#mes = novoMes
      }
   }


   set ano(novoAno){
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
d1.dia = 'Blabla'
d1.dia = 25
d1.mes = 9
d1.ano = 1976

console.log(d1.exibir(), d1)



