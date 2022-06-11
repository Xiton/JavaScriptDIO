function uniqueElements(array) {
	let unique = new Set(array);
	return [...unique]; // devolve array

}

function uniqueElements1(array) {
	let unique = new Set(array);
	return [unique]; //devolve 1 item com os elementos dentro
    
}

const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(uniqueElements(arr));

console.log(uniqueElements1(arr));