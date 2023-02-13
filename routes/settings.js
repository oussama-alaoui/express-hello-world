const express = require('express');
const router = express.Router();
const {isAuth} = require('../middleware/authentication')

const accountController = require('../controllers/account.controller');
const productsController = require('../controllers/products.controller');

router.get('/', isAuth, (req, res) => {
    res.render('account', {user: req.user});
    }
);

router.get('/myads', isAuth, productsController.get_myads);

router.get('/address', isAuth, accountController.get_address);

router.post('/address', isAuth, accountController.put_address);

router.get('/orderhistory', isAuth, (req, res) => {
    res.render('settings/orderhistory');
    }
);

router.get('/payment', isAuth, accountController.get_payment);

router.get('/transfer', isAuth, (req, res) => {
    res.render('settings/transfer');
    }
);

router.get('/confirmtransfer', isAuth, (req, res) => {
    res.render('settings/confirmtransfer');
    }
);

router.get('/identification', isAuth, accountController.get_identification);

router.post('/identification', isAuth, accountController.put_identification);

router.get('/orderhistory', isAuth, (req, res) => {
    res.render('settings/orderhistory');
    }
);

router.get('/subscription', isAuth, accountController.get_subscription);

router.post('/subscription/purchase', isAuth, accountController.post_subscription);

module.exports = router;