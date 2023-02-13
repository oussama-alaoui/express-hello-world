var express = require('express');
var router = express.Router();
const {isAuth} = require('../middleware/authentication')

// Require controller modules.
var home_controller = require('../controllers/home.controller');
var products_controller = require('../controllers/products.controller');

/* GET home page. */
router.get('/', products_controller.index);




module.exports = router;
