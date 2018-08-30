const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const estacoes = require('./data/estacoes.json');

const app = express();
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
app.use(bodyParser.urlencoded());

app.get('', (req, res) => {
    res.render('index');
});

app.get('/estacoes', (req, res) => {
    res.render('estacoes', {'estacoes': estacoes});
});

app.get('/comentarios', (req, res) => {
    res.render('comentarios');
});

app.get('/styles.css', (req, res) => {
    let cores = ['blue', 'red', 'yellow'];

    let numero = Math.floor(Math.random() * 3);

    let cor = cores[numero];
    
    res.send(`
        body{
            color: ${cor};
        }
    `);
});

app.listen(3000, () => {
    console.log('Servidor inicializado')
});