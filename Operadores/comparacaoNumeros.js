function comparaNumeros(num1, num2) {
	return `${verificaIgualdade(num1, num2)} ${somaCompara(num1, num2)}` ;
}

function verificaIgualdade(num1, num2) {
    return `Os números ${num1} e ${num2} ${(num1 === num2) ? '' : 'não '}são iguais.`;
}

function somaCompara(num1, num2) {
	const soma = num1 + num2;
	return `Sua soma é ${soma}, que é ${(soma > 10)? 'maior':'menor'} do que 10 e ${ (soma > 20)?'maior':'menor'} do que 20.`;
}

console.log(comparaNumeros(30, 10));