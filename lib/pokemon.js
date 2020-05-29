const fetch = require('node-fetch');
const pokeID = Math.floor(Math.random() *  (807 - 1) + 1);
const URI =`https://pokeapi.co/api/v2/pokemon/${pokeID}`;
const getPoke = async() => {
	let rawData = await fetch(URI);
    let data = await rawData.json();
    // console.log(data);
    // let hdUrl = await data.hdurl;
    // console.log(hdUrl);
    // console.log("^^^ HD url log")
    return data;
}
module.exports = getPoke;