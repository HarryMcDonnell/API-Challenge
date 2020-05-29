const fetch = require('node-fetch');
const randStarChar = Math.floor(Math.random() *  (83 - 1) + 1);
const URI =`https://swapi.dev/api/people/${randStarChar}`;
const getSW = async() => {
	let rawData = await fetch(URI);
    let data = await rawData.json();
    // console.log(data);
    // let hdUrl = await data.hdurl;
    // console.log(hdUrl);
    // console.log("^^^ HD url log")
    return data;
}
module.exports = getSW;