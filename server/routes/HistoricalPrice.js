const express = require('express');
const router = express.Router();
const controller = require('../controllers/Controller');

router.post("/aresa-api/historical_price", controller.postHistoricalPrices)
router.get("/aresa-api/historical_price", controller.getHistoricalPrices)

router.get('/add-historical-price', (req, res, next) => {
    res.render('postHistoricalPrices')
})

router.get('/check-historical-price', (req, res, next) => {
    res.render('getHistoricalPrices')
})

module.exports = router;
