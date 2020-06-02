const express = require ('express'); //npm i express-handlebars
const hbs = require ('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser'); //npm i body-parser
const app = express();

const nasaApod = require('./lib/nasa');
const randPoke = require('./lib/pokemon');
const swAPI = require('./lib/swapi');

require ('dotenv').config // npm i dotenv

app.use(bodyParser.urlencoded({extended: false}));
//ignore data types and make everything a string
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));
app.set('view engine', '.hbs');

app.get('/', async (req, res) => { // localhost:3000/ home page
    res.render('home');
});
app.get('/apod', async (req, res) => { //input type=date to pick which apod 
    let date = req.body.date;
    let rawSrc = await nasaApod();
    console.log(rawSrc);
    console.log("^^^src log");
    let src = await rawSrc.hdurl;
    let descrip = await rawSrc.explanation;
    res.render('apod', { src, descrip })
})
app.get('/poke', async (req, res) => {
    let rawData = await randPoke();
    let poke = await rawData.forms[0].name;
    let pokePic = await rawData.sprites.front_default;
    console.log(poke);
    console.log(pokePic);
    res.render('poke', { poke, pokePic })
})
app.get('/starwars', async (req, res) => {
    let rawChar = await swAPI.getSW();
    // let name = await rawChar.name;
    // let height = await rawChar.height;
    // let dob = await rawChar.birth_year;
    let response = {
		name: rawChar.name,
		height: rawChar.height,
		DOB: rawChar.birth_year
	}
    res.render('swapi', { response })
})
app.post('/starwars', async(req, res) => {
    let number = req.body.number;
    console.log(number);
    let response = await swAPI.chooseChar(number);
    res.render('swapi', { response });
})

app.listen(3000,() => { // localhost:3000 but can be any port between 3000-8000 i think
    console.log("listening on port 3000"); 
})