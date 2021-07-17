var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const cust = require('../service/custom-validator')
router.get('/json3', function(req, res, next) {

  console.log(cust.custVal2()());
  res.json({
    'json3': 'success'
  })

});

module.exports = router;
