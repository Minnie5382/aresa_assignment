const express = require('express');
const router = express.Router();
const controller = require('./Controller');

router.use(express.json());
router.get("/aresa-api/future_price", controller.getFuturePrices)
router.post("/aresa-api/future_price", controller.postFuturePrices)

module.exports = router;