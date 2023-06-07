const express = require('express');
const router = express.Router();
const controller = require('../controllers/Controller');

router.post("/aresa-api/future_price", controller.postFuturePrices)
router.get("/aresa-api/future_price", controller.getFuturePrices)

router.get('/add-future-price', (req, res, next) => {
    res.render('postFuturePrices')
})

router.get('/check-future-price', (req, res, next) => {
    res.render('getFuturePrices')
})

module.exports = router;