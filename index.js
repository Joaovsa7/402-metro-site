const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const estacoes = require('./data/estacoes.json');
const expressMongoDb = require('express-mongo-db');

const app = express();
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
app.use(bodyParser.urlencoded());
app.use(expressMongoDb('mongodb://localhost/ranksubway'));


app.get('', (req, res) => {
    res.render('index');
});

app.get('/estacoes', (req, res) => {
    res.render('estacoes', {'estacoes': estacoes});
});

app.post('', (req, res) => {

    let string = `nome ${req.body.nome} \r\nProfissao: ${req.body.profissao} \r\nEmail: ${req.body.email} \r\nMensagem: ${req.body.mensagem}`;

    req.db.collection('mensagem').insert(req.body, (erro) => {
        console.log(erro);
        res.render('index');
    });

});

// app.get('/comentarios', (req, res) => {
//     res.render('comentarios');
// });

// app.get('/styles.css', (req, res) => {
//     let cores = ['blue', 'red', 'yellow'];

//     let numero = Math.floor(Math.random() * 3);

//     let cor = cores[numero];
    
//     res.send(`
//         body{
//             color: ${cor};
//         }
//     `);
// });

app.listen(3000, () => {
    console.log('Servidor inicializado')
});