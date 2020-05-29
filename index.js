const express = require ('express'); //npm i express-handlebars
const hbs = require ('express-handlebars');
const path = require('path');
const app = express();

const nasaApod = require('./lib/nasa');
const randPoke = require('./lib/pokemon');
const randStar = require('./lib/swapi');

require ('dotenv').config // npm i dotenv

app.use(express.static(path.join(__dirname, 'public')));
app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));
app.set('view engine', '.hbs');

app.get('/', async (req, res) => { // localhost:3000/ home page
    res.render('home');
});
app.get('/APOD', async (req, res) => {
    let rawSrc = await nasaApod();
    console.log(rawSrc);
    console.log("^^^src log");
    let src = await rawSrc.hdurl;
    let descrip = await rawSrc.explanation;
    res.render('apod', { src, descrip })
})
app.get('/POKE', async (req, res) => {
    let rawData = await randPoke();
    let poke = await rawData.forms[0].name;
    let pokePic = await rawData.sprites.front_default;
    console.log(poke);
    console.log(pokePic);
    res.render('poke', { poke, pokePic })
})
app.get('/STARWARS', async (req, res) => {
    let rawChar = await randStar();
    let name = await rawChar.name;
    res.render('swapi', { name })
})

app.listen(3000,() => { // localhost:3000 but can be any port between 3000-8000 i think
    console.log("listening on port 3000"); 
})