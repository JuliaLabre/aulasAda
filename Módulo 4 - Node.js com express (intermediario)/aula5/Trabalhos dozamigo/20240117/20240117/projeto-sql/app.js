const sqlite3 = require('sqlite3').verbose();

// Conectar ao banco de dados
const db = new sqlite3.Database('database.db');

db.serialize(() => {
  db.run(`
        CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY,
            nome TEXT,
            idade INTEGER,
            email TEXT UNIQUE
        )
    `);
});

// Dados a serem inseridos
const novoRegistro = {
  id: 1,
  nome: 'John Doe',
  idade: 30,
  email: 'john@email.com'
};

// Comando SQL de inserção
const sqlInserir = 'INSERT INTO user (id, nome, idade, email) VALUES (?, ?, ?, ?)';

// Executar a inserção
db.serialize(() => {
  db.run(sqlInserir, [
    novoRegistro.id,
    novoRegistro.nome,
    novoRegistro.idade,
    novoRegistro.email],
    function (err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Registro inserido com ID: ${this.lastID}`);
    });
});

// Novos dados para atualização
const novosDados = {
  idade: 31,
  email: 'novo@email'
};

// Comando SQL de atualização
const sqlAtualizar = 'UPDATE user SET idade = ?, email = ? WHERE nome = ?';

// Executar a atualização
db.run(sqlAtualizar, [novosDados.idade, novosDados.email, 'John Doe Will'], function (err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Registros atualizados: ${this.changes}`);
});

// Comando SQL de exclusão
const sqlExcluir = 'DELETE FROM user WHERE nome = ?';

// Executar a exclusão
db.run(sqlExcluir, ['John Doe Will'], function (err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Registros excluídos: ${this.changes}`);
});


// !Fechar a conexão após a operação Aula 5
db.close();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
