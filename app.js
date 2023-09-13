require('dotenv').config();
const express = require('express')
const app = express()
var hbs = require('hbs');


port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Ahuitzol',
        titulo: 'Curso Node'
    })
  });

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Ahuitzol',
        titulo: 'Curso Node'
    })
  });

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Ahuitzol',
        titulo: 'Curso Node'
    })
  });

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
  });



app.listen(port, () => {
    console.log(`La aplicación esta escuchando en el puerto ${port}`);
})