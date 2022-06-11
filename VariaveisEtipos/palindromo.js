// solução 1 //Trata frase, mas sem acentuação e pontuação
function verificaPalindromo(string) {
	if (!string) return;
	console.log(string.replaceAll(" ","").toUpperCase() === string.split('').reverse().join('').replaceAll(" ","").toUpperCase());
}

verificaPalindromo('Socorram me subi no onibus em Marrocos'); 

// solução 2 //Trata frase, mas sem acentuação e pontuação

function varificaPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;

    let stringSemBrancos = string.replaceAll(" ","").toUpperCase();

	for (var i = 0; i < stringSemBrancos.length / 2; i++) {
		if (stringSemBrancos[i] !== stringSemBrancos[stringSemBrancos.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('Socorram me subi no onibus em Marrocos');