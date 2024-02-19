var express = require('express');
var router = express.Router();

router.get("/cadastrar_p", (req, res) => {
    res.render('cadastrar_produto')
  })
  