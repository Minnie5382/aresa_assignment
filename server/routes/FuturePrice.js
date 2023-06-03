const express = require('express');
const router = express.Router();

router.get('/',(req, res) => { 
    res.send("get localhost:8080/aresa-api/future_price")
})
router.post('/',(req,res) => {
    res.send('post localhost:8080/aresa-api/future_price')
})

    module.exports = router;