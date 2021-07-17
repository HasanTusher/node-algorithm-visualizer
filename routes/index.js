//import {validator} from "../service/validator";
//import {validator} from "../service/validator";

const asdf = require('../service/validator');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



/* GET home page. */
router.get('/welcome', function(req, res, next) {
  res.render('index', { title: 'yaya' });
});


let firstMiddleWare = (req, res, next) =>{
  console.log(req);
  next();
}


let secondMiddleWare = (req, res, next) =>{
  console.log(req);
  next();
}


let thirdMiddleWare = (req, res, next) =>{
  res.json({
    'yaya': 'nay'
  })
}

const cus = require('../service/custom-validator')
//router.use(cus.customValidator());
const myOwnValidator = cus.custVal2();
let fourthMiddleWare = (req, res, next) =>{
  //console.log('i was called')
  console.log(myOwnValidator());
  res.json({
    'damn': 'damn'
  })
}

let fifthMiddleWare = (req, res, next) =>{
  //console.log('i was called')
  console.log(myOwnValidator());
  res.json({
    'damn': 'damn'
  })
}
/* GET home page. */
router.get('/json', [firstMiddleWare, secondMiddleWare, thirdMiddleWare]);

router.get('/json2', [fourthMiddleWare]);
router.get('/json4', [fifthMiddleWare]);

module.exports = router;
