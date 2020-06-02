const fetch = require('node-fetch');
const getPoke = async() => {
    const pokeID = Math.floor(Math.random() *  (807 - 1) + 1);
    const URI =`https://pokeapi.co/api/v2/pokemon/${pokeID}`;
	let rawData = await fetch(URI);
    let data = await rawData.json();
    return data;
}

module.exports = getPoke;