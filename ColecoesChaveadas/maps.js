// Mudei para ser passado o role
const getSelecionados = (map, role) => {
	let selecionados = [];

	for ([key, value] of map) {
		if (value.toUpperCase() === role.toUpperCase()) {
			selecionados.push(key);
		}
	}

	return selecionados;
};

const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value.toUpperCase() === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRole = new Map();

userRole.set('Washington', 'Admin');
userRole.set('Vanessa', 'ADMIN');
userRole.set('Caio', 'ADMIN');
userRole.set('Vinicius', 'USER');
userRole.set('Bruno', 'User');

console.log(getAdmins(userRole));

console.log(getSelecionados(userRole, "user"));