const data = document.querySelector('#data');

async function getPokeData() {
	const url = 'https://pokeapi.co/api/v2/pokemon/clefairy/';

	const response = await fetch(url).then((response) => response.json());
	console.log(response.abilities[0]);
	data.textContent = `${response.abilities[0].ability.name} ${response.abilities[0].is_hidden}`;
}

getPokeData();
