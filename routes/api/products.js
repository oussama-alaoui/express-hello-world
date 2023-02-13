var express = require('express');
var router = express.Router();

// Require middleware modules.
var upload_multi_img = require('../../middleware/upload_multi_img')

// Require controller modules.
var product_controller = require('../../controllers/api/products.controller');

/* GET all products. */
router.get('/api', product_controller.findAll);

/* GET product by id. */
router.get('/api/:productId', product_controller.findOneById);

/* GET product by user id. */
router.get('/api/user/:userId', product_controller.findUserProducts);

/* POST create product. */
router.post('/api', upload_multi_img.array('img'), product_controller.create);

/* PUT update product. */
router.put('/api/:productId', product_controller.update);

/* DELETE delete product. */
router.delete('/api/:productId', product_controller.delete);

module.exports = router;