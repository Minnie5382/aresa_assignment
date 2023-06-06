const express = require('express');
const app = express();
const path = require('path');
port = 8080;

// path 설정
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, '/views/')); 


// router 설정
const historicalPriceRouter = require("./routes/HistoricalPrice.js");
const futurePriceRouter = require("./routes/FuturePrice.js");

// app.use(express.json());
app.use(historicalPriceRouter);
app.use(futurePriceRouter);

// 에러 처리
app.use((req, res, next) => {
    res.status(404).send('Page Not found.')
})

app.use((req, res, next) => {
    res.status(500).send("Something's wrong.");
})

// 서버 실행
app.listen(port, () => {
    console.log(`listening on ${port}`)
})

