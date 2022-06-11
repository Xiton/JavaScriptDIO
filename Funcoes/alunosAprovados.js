const alunos = [
	{
		nome: 'Washington',
		nota: 9,
		turma: '1B',
	},
    {
		nome: 'Caio',
		nota: 6,
		turma: '1B',
	},   
	{
		nome: 'Vanessa',
		nota: 10,
		turma: '1B',
	},
	{
		nome: 'Vinicius',
		nota: 8,
		turma: '2C',
	},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 7));