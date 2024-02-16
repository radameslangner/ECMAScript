const estados = ` SIGLA;NOME;CAPITAL;REGIÃO;
AC;ACRE;RIO BRANCO;NORTE;
PA;PARÁ;BELÉM;NORTE;
RO;RONDÔNIA;PORTO VELHO;NORTE;
RR;RORAIMA;BOA VISTA;NORTE;
TO;TOCANTINS;PALMAS;NORTE;
MA;MARANHÃO;SÃO LUIZ;NORDESTE;
PB;PARAÍBA;JOÃO PESSOA;NORDESTE;
PE;PERNAMBUCO;RECIFE;NORDESTE;
PI;PIAUÍ;TEREZINA;NORDESTE;
RN;RIO GRANDE DO NORTE;NATAL;NORDESTE;
SE;SERGIPE;ARACAJÚ;NORDESTE;
GO;GOIÁS;GOIÂNIA;CENTRO-OESTE;
MS;MATO GROSSO DO SUL;CAMPO GRANDE;CENTRO-OESTE;
MT;MATO GROSSO;CUIABÁ;CENTRO-OESTE;
ES;ESPÍRITO SANTO;VITÓRIA;SUDESTE;
MG;MINAS GERAIS;BELO HORIZONTE;SUDESTE;
RJ;RIO DE JANEIRO;RIO DE JANEIRO;SUDESTE;
SP;SÃO PAULO;SÃO PAULO;SUDESTE;
RS;RIO GRANDE DO SUL;PORTO ALEGRE;SUL;
SC;SANTA CATARINA;FLORIANÓPOLIS;SUL;
AM;AMAZONAS;MANAUS;NORTE;
AP;AMAPÁ;MACAPÁ;NORTE;
AL;ALAGOAS;MACEIÓ;NORDESTE;
BA;BAHIA;SALVADOR;NORDESTE;
CE;CEARÁ;FORTALEZA;NORDESTE;
PR;PARANÁ;CURITIBA;SUL; `
//Parte 1 - Transforme o conteúdo da variavel estados em um objeto que contém a sigla, o estado, a capital e a região.

let estadosSplit = estados.split("\n")
// console.log(estadosSplit)

let objetosEstados = []
for(let i=1; i<estadosSplit.length; i++){
    let estadoAtual = estadosSplit[i]
    let informacaoEstado = estadoAtual.split( ";")
    let objetoEstado = {
        sigla: informacaoEstado[0],
        nome: informacaoEstado[1],
        capital: informacaoEstado[2],
        regiao: informacaoEstado[3]
    }
    objetosEstados.push(objetoEstado)
}

// console.log(objetosEstados)

//Parte 2
//Crie uma função que irá retornar todos os estados de uma determinada região

function procuraPorRegiao(regiao){
    let estadosDaRegiao = []
    for (let i=0; i < objetosEstados.length; i++ ){
        let estado = objetosEstados[i]
        if(estado.regiao === regiao){
            estadosDaRegiao.push(estado)
        }
    }
    return estadosDaRegiao

}

// console.log(procuraPorRegiao("NORTE"))
// console.log(procuraPorRegiao("SUL"))

//Parte 3
//Retorne o estado de acordo com a sigla

function encrontraNome(sigla){
    for(estado of objetosEstados){
        if(estado.sigla === sigla)
        return estado.nome
    }
}

console.log(encrontraNome("AM"))