const express = require('express');
var hbs = require('hbs'); // Paginas dinamicas

const app = express()


var path = require('path');

hbs.registerPartials(path.join(__dirname, 'views', 'partials'), function (err) { });

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))) // app.get is not used, paginas estaticas
app.set('view engine', 'hbs');
app.set('views', [
    path.join(__dirname, 'views'),
    path.join(__dirname, 'views', 'test')

]);

app.get('/', (req, res, next) => {
    res.render('home', {
        nombre: 'Camilo Rosero',
        titulo: 'Topicos Avanzados'
    });
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/generic', (req, res) => {
    res.render('generic');
});

app.get('/elements', (req, res) => {
    res.render('elements');
});

app.get('*', (req, res) => {
    res.render('404');
});



app.post('/form', function (req, res) {
    console.log(req.body)
    let name = req.body.name;
    let email = req.body.email;
    let msg = req.body.message;
    let htmlData = 'Hello:' + name;
    //res.send(htmlData);
    console.log(htmlData);
    res.render('home');
});


app.listen(3000)