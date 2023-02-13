var express = require('express');
var router = express.Router();

// Require controller modules.
var category_controller = require('../../controllers/api/category.controller');

/* GET all categories. */
router.get('/', category_controller.findAll);

/* POST create category. */
router.post('/', category_controller.create);

module.exports = router;