const express = require('express');
const bodyParser = require('body-parser');
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

app.get('/comentarios', (req, res) => {
    req.db.collection('mensagem').find().toArray((erro, dados) => {
        console.log(erro);
        res.render('comentarios', {'comentarios': dados});
    });
});

app.post('/comentarios', (req, res) => {
    req.db.collection('mensagem').insert(req.body, (erro) => {
        console.log(erro);
        res.render('index');
    });


});





app.listen(3000, () => {
    console.log('Servidor inicializado')
});