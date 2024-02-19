var express = require('express');
var router = express.Router();

const dados = require('../data/livros.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(dados);
});

module.exports = router;
