const sqlite3 = require('sqlite3').verbose();

// Conectar ao banco de dados
const db = new sqlite3.Database('database.db');

db.serialize(() => {
  db.run(`
  CREATE TABLE IF NOT EXISTS categorias (
    id INTEGER PRIMARY KEY,
    nome TEXT
    );`);

  db.run(`
  CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY,
    nome TEXT,
    estoque INTEGER,
    categoria INTEGER,
    preco REAL,
    descricao TEXT, 
    url_da_imagem TEXT,

    FOREIGN KEY (categoria) REFERENCES categorias (id)
)
    `);

  
  const novoRegistro = [
    {
      id: 1,
      nome: 'Eletronicos'
    },
    {
      id: 2,
      nome: 'Cosméticos'

    },
    {
      id: 3,
      nome: 'Vestuário'
    }
  ];
  // Produtos
  const novoRegistro2 = [
    {
      id: 1,
      nome: 'Smartphone',
      estoque: 50,
      categoria: 'Eletronicos',
      preco: 899.99,
      descricao: 'Um smartphone avançado com várias funcionalidades.',
      url_da_imagem: 'https://dev.digitalflorins.com/wp-content/uploads/2016/05/Placeholder-300x300.png'
    },
    {
      id: 2,
      nome: 'Perfume Floral',
      estoque: 20,
      categoria:'Cosméticos',
      preco: 49.99,
      descricao: 'Uma fragrância delicada e floral.',
      url_da_imagem: 'https://dev.digitalflorins.com/wp-content/uploads/2016/05/Placeholder-300x300.png'
    },
    {
      id: 3,
      nome: 'Camiseta Casual',
      estoque: 100,
      categoria: 'Vestuário',
      preco: 29.99,
      descricao: 'Uma camiseta confortável para uso casual.',
      url_da_imagem: 'https://dev.digitalflorins.com/wp-content/uploads/2016/05/Placeholder-300x300.png'
    },
    {
      id: 4,
      nome: 'Fone de Ouvido Bluetooth',
      estoque: 30,
      categoria: 'Eletronicos',
      preco: 79.99,
      descricao: 'Fone de ouvido sem fio com alta qualidade de som.',
      url_da_imagem: 'https://dev.digitalflorins.com/wp-content/uploads/2016/05/Placeholder-300x300.png'
    }

  ];

  // Comando SQL de inserção
  const sqlInserir = 'INSERT INTO categorias (id, nome) VALUES (?, ?)';

  // Executar a inserção de Categorias:
  novoRegistro.forEach(registro => {
    db.run(sqlInserir, [
      registro.id,
      registro.nome
    ],
      function (err) {
        if (err) {
          return console.error(err.message);
        }
        console.log(`Registro inserido com ID: ${this.lastID}`);
      });
  });

 // Inserir Produtos:
  const sqlInserir2 = 'INSERT INTO produtos (id, nome, estoque, categoria, preco, descricao, url_da_imagem) VALUES (?, ?, ?, ?, ?, ?, ?)';
  
  novoRegistro2.forEach(registro => {
    db.run(sqlInserir2, [
      registro.id,
      registro.nome,
      registro.estoque,
      registro.categoria,
      registro.preco,
      registro.descricao,
      registro.url_da_imagem

    ],
      function (err) {
        if (err) {
          return console.error(err.message);
        }
        console.log(`Registro inserido com ID: ${this.lastID}`);
      });
  });
// Fecha o banco depois das inserções ?

  // Comando SQL de consulta Todos:
function ConsultaTodosProdutos(){
  const sqlConsultaTodos = 'SELECT * FROM produtos';

  // Executar a consulta
  db.all(sqlConsultaTodos, [], (err, rows) => {
    if (err) {
      throw err;
    }
    // Processar os resultados
    rows.forEach((row) => {
      console.log(row);
    });
  });
}
ConsultaTodosProdutos();

function consultaEstoqueMinimo(){
  // Condição de consultas
  const estoqueMinimo = 1;

  // Comando SQL de consulta com condição
  const sqlConsultaComCondicao = 'SELECT * FROM produtos WHERE estoque >= ?';

  // Executar a consulta
  db.all(sqlConsultaComCondicao, [estoqueMinimo], (err, rows) => {
    if (err) {
      throw err;
    }
    // Processar os resultados
    rows.forEach((row) => {
      console.log(row);
    });
  });

}

function consultaMenorPreco(){
  // Comando SQL de consulta para uma única linha
  const sqlOrdernarMenorPreco = 'SELECT * FROM produtos ORDER BY preco DESC;';

  // Executar a consulta
  db.get(sqlOrdernarMenorPreco, (err, row) => {
    if (err) {
      throw err;
    }
    // Processar o resultado
    console.log(row);
  });

}


function consultaMaiorPreco(){
  // Comando SQL de consulta para uma única linha
  const sqlOrdernarMaiorPreco = 'SELECT * FROM produtos ORDER BY preco ASC;';

  // Executar a consulta
  db.get(sqlOrdernarMaiorPreco, (err, row) => {
    if (err) {
      throw err;
    }
    // Processar o resultado
    console.log(row);
  });

}

});

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
