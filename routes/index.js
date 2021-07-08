var express = require('express');
var router = express.Router();
var {verificadorDocumento} = require('../utils/verificadores');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Verificador De Documentos', esValido: 0 });
});

router.post('/verificar-documento', (req, res) => {

  let esValido;
  console.log(req.body.documento);
  if (verificadorDocumento(req.body.documento)) {
    esValido = 1;   
  }

  else {
    esValido = -1;
  }

  res.render('index', { title: 'Verificador De Documentos', esValido });
})

module.exports = router;
