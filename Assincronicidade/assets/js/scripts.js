const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

var headers = {};

const catBtn = document.getElementById('change-cat');

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL, {
			mode: 'no-cors',
			headers: headers
		})
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const catImg = document.getElementsByTagName('cat');
    console.log("passou aqui");
	catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();