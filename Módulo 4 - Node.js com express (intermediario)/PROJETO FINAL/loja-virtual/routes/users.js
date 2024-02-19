var express = require('express');
var router = express.Router();
const DatabaseSingleton = require("../config/ConfigDB");
const databaseInstance = new DatabaseSingleton();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/cadastrar_usuario", (req, res) => {
  res.render('cadastrar_usuario');
})



module.exports = router;
