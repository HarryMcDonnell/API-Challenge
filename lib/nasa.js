const fetch = require('node-fetch');
const APPID = 'FcEnfqLYgzvJmhBCPrTUBFIovuNw6gX645effoyN';
const URI =`https://api.nasa.gov/planetary/apod?api_key=${APPID}`;
const getAPOD = async() => {
	let rawData = await fetch(URI);
    let data = await rawData.json();
    // console.log(data);
    // let hdUrl = await data.hdurl;
    // console.log(hdUrl);
    // console.log("^^^ HD url log")
    return data;
}
const dateAPOD = async (date) => {
    let rawData = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${APPID}`);
    let data = await rawData.json();
	return data;
}
module.exports = {
    getAPOD,
    dateAPOD
}