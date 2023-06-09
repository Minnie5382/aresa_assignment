const express = require('express');
const router = express.Router();
const controller = require('../controllers/Controller');
const path = require('path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'main.out.html'))
})

module.exports = router;
