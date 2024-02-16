/*

Enunciado

Uma professora tem que entragar as notas dos alunos. cada aluno tem quatro 
disciplinas com quatro notas por disciplina.

Entrega de diferentes maneiras

Diretoria { nome do aluno e médias por disciplina }

Aluno  nome e se aprovado, reprovado ou em recuperação

aprovado >= 7 
recuperação < 7 e >= 5
reprovado < 5 

Pais se o aluno foi aprovado, reprovado ou em recuperação 

se aprovado em 4 disciplinas - Aprovado
se recuperação em uma ou duas disciplinas e aprovado nas outras - Recuperação
se reprovado em uma ou mais disciplinas - Reprovado

*/

function mediaDeUmArray(numeros){
    if(!Array.isArray(numeros)) return null
    
    let total = 0
    for(let numero of numeros){
     total += numero
    }
    return total / numeros.length
 }

const formatarNota = media => media.toFixed(1)

const aprovado = nota => nota >= 7

function entregaParaDiretoria(aluno){
    let objRetorno = {
        nome: aluno.nome,
        disciplinas: []
    }  
    for (disciplina of aluno.disciplinas) {
        let media = mediaDeUmArray(disciplina.notas)
        objRetorno.disciplinas.push({
            nome: disciplina.nome,
            media: formatarNota(media)
            }
        )
    }
    return objRetorno
}

function entregaParaAluno(aluno){
    let objRetorno = {
        nome: aluno.nome,
        disciplinas: []
    }  
    for (disciplina of aluno.disciplinas) {
        let media = mediaDeUmArray(disciplina.notas)        
        objRetorno.disciplinas.push({
            nome: disciplina.nome,
            media: media
            }
        )
    }
    return objRetorno    
}



const aluno = {
    nome: "Joãozinho",
    disciplinas: [
        {
            nome: "Português",
            notas: [7.4, 5.6, 10, 9]
        },
        {
            nome: "Matemática",
            notas: [4.4, 5.0, 8.2, 7.0]
        },        
        {
            nome: "Ciências",
            notas: [8.2, 7.6, 8.0, 6.3]
        },
        {
            nome: "Estudos Sociais",
            notas: [9.2, 7.6, 8.5, 7.0]
        }
    ]
    
}



console.log(entregaParaDiretoria(aluno))
console.log(entregaParaAluno(aluno))