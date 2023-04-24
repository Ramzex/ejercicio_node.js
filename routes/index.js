var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hola Mundo', nombre: 'Ramses', apellido: 'Rivero', cedula: '30452565', seccion: '1' });
});

module.exports = router;
