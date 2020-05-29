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
module.exports = getAPOD;