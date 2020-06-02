const fetch = require('node-fetch');
const randStarChar = Math.floor(Math.random() *  (83 - 1) + 1);
const URI =`https://swapi.dev/api/people/${randStarChar}`;
const getSW = async() => {
	let rawData = await fetch(URI);
    let data = await rawData.json();
    console.log(randStarChar);
    // console.log(data);
    // let hdUrl = await data.hdurl;
    // console.log(hdUrl);
    // console.log("^^^ HD url log")
    return data;
}
const chooseChar = async (number) => {
    let rawData = await fetch(`https://swapi.dev/api/people/${number}`);
    let data = await rawData.json();
	let response = {
		name: data.name,
		height: data.height,
		DOB: data.birth_year
	}
    return response;
}
module.exports = {
    getSW,
    chooseChar
}