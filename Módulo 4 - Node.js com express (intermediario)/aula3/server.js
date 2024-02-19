const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configuração do mecanismo de modelo EJS
app.set('view engine', 'ejs');
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
    res.send('<h1>Isso é um exemplo de HTML.</h1>');
});

