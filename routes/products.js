var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('ads/ads');
    }
);

router.get('/product', (req, res) => {
    res.render('ads/ad-detail-bid');
    }
);

module.exports = router;