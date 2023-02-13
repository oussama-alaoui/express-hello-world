var express = require('express');
var router = express.Router();
var userController = require('../../controllers/api/users.controller');
var upload = require('../../middleware/uploads_img');
var auth = require('../../middleware/authentication');

/* GET users listing. */
router.get('/', auth, userController.findAll);


router.post('/', upload.single('img') , userController.create);

router.post('/login', userController.login);


module.exports = router;
