function substituiNumerosPares(array) {
	if (!array.length) return console.log(-1);

	const diferenteZero = (num) => num !== 0;
	const numPar = (num) => num % 2 === 0;

	for (let i = 0; i < array.length; i++) {
		if (numPar(array[i]) && diferenteZero(array[i])) {
			console.log(`trocando ${array[i]} por 0...`);
			array[i] = 0;
		} else if (!diferenteZero(array[i])) {
			console.log('O número já é zero(0)');
		}
	}
	console.log(array);
}

substituiNumerosPares([2, 0, 3, 5]);
