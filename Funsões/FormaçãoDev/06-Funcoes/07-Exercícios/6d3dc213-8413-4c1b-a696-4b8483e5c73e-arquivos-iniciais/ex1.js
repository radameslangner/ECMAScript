/*Uma professora tem que entregar as notas dos alunos que estão estruturadas como o objeto de exemplo, e essa entrega tem que ser feita de algumas maneiras diferentes:

- Pra diretoria ela deve entregar o nome do aluno e um objeto com as médias dele em cada uma das matérias
- Pro aluno ela deve entregar um objeto com todas as matérias e se o aluno foi aprovado, reprovado ou está de recuperação em cada matéria. (Média maior ou igual a 7 aprovado, média menor que 5.5 reprovado, média entre 5.6 e 6.9 em recuperação)
- Pros pais do aluno ela deve dizer apenas se o aluno foi aprovado, reprovado ou se está de recuperação. Se o aluno for aprovado em todas as matérias, ele está aprovado, se ficou de recuperação em uma matéria e está aprovado nas outras, está de recuperação caso contrário, está reprovado.

*/

function entregaPraDiretoria(aluno){
}


function entregaProAluno(aluno){
}

function entregaProsPais(aluno){
}

const joaozinho = {
	nome: "Joaozinho",
	materias: [
		{
			nome: "Português",
			notas: [7.4, 5.6, 10, 9],
		},
		{
			nome: "Matemática",
			notas: [4.4, 5.0, 8.2, 7.0],
		},
        {
			nome: "Ciências",
			notas: [8.2, 7.6, 8.0, 6.3],
		},
        {
			nome: "Estudos Sociais",
			notas: [9.2, 7.6, 8.5, 7.0],
		},
	],
};


console.log(entregaPraDiretoria(joaozinho))
console.log(entregaProAluno(joaozinho))
console.log(entregaProsPais(joaozinho))