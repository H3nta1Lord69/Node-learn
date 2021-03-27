require('dotenv').config();
const express = require('express');
const hbs = require('hbs')

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Place static content
app.use( express.static('public') )

app.get( '/', ( req, res ) => {
    res.render('home', {
        name: 'Carlos Garcia',
        tittle: 'Express app'
    });
});

app.get( '/generic', ( req, res ) => {
    res.render('generic', {
        name: 'Carlos Garcia',
        tittle: 'Express app'
    });
});

app.get( '/elements', ( req, res ) => {
    res.render('elements', {
        name: 'Carlos Garcia',
        tittle: 'Express app'
    });
});

app.get( '*', ( req, res ) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`App listening al http://localhost:${ port }`)
});