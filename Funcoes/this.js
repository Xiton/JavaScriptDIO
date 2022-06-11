function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Washington',
	idade: 58,
};

const pessoa2 = {
	nome: 'Vanessa',
	idade: 41,
};

const pessoa3 = {
	nome: 'Vinícius',
	idade: 4,
};

console.log(calculaIdade.apply(pessoa1, [14])); //com apply precisa manda com os colchetes 
console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24])); //com apply precisa manda com os colchetes 