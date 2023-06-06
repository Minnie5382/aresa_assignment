const express = require('express');
const router = express.Router();
const controller = require('./Controller');

router.use(express.json());
router.get("/aresa-api/historical_price", controller.getHistoricalPrices)
router.post("/aresa-api/historical_price", controller.postHistoricalPrices)

module.exports = router;
