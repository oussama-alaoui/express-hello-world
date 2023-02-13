const express = require('express');
const router = express.Router();
const {isAuth} = require('../middleware/authentication')
const productsController = require('../controllers/products.controller');

var upload = require('../middleware/upload_multi_img');

router.get('/', isAuth, (req, res) => {
    res.render('newad');
    }
);
router.get('/newad_gen', isAuth, (req, res) => {
    res.render('new_ads/newad-gen');
    }
);

router.get('/newauction', isAuth, productsController.newAuction);

router.get('/newbuy', isAuth, (req, res) => {
    res.render('new_ads/newbuy');
    }
);

router.get('/newreq', isAuth, (req, res) => {
    res.render('new_ads/newreq');
    }
);

// craete new buy ad
router.post('/newbuy', isAuth, upload, productsController.createBuy);

// craete new auction ad
router.post('/newauction', isAuth, upload, productsController.createAuction);

// craete new request ad
router.post('/newreq', isAuth, upload, productsController.createRequest);

// create new ad in service
router.post('/newad_gen', isAuth, upload, productsController.createAdGen);


module.exports = router;