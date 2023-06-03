const express = require('express');
const router = express.Router();

router.get('/',(req, res) => { 
    const body = req.body;
    console.log(body);
    res.send("get localhost:8080/aresa-api/future_price");
    console.log(body);
})
router.post('/',(req,res) => { 
    res.send('post localhost:8080/aresa-api/future_price')
})

module.exports = router;