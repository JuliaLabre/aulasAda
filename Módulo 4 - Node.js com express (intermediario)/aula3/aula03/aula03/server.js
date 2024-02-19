const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const pug = require('pug');
const compileFunction = pug.compileFile('template.pug');

// Configuração do mecanismo de modelo EJS
app.set('view engine', 'ejs', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Rota para renderizar uma página no servidor
app.get('/', (req, res) => {
res.render('index', { title: 'Página Renderizada no Servidor' });
});

// Inicia o servidor
app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);
});

//Redireciona para outra rota
app.get('/redirecionado', (req, res) => {
    res.redirect(301, '/views/index.ejs');
});

//Rota para página html
app.get('/html', (req, res) => {
    res.type('text/html');
    res.send('<b>Isso é um exemplo de HTML.</b>');
});

//Rota para arquivo
app.get('/arquivo', (req, res) => {
    res.sendFile(path.join(__dirname, 'send_file.txt'))
});

//Rota para renderizar html
app.get('/render', (req, res) => {
    res.render('index', { title: 'Página Renderizada no Servidor', mensagem: "Olá mundo renderizado!" });
});

//Renderizando view PUG
app.get('/pug', (req, res) => {
    res.send()
})
