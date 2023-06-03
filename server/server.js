const express = require('express');
const app = express();
port = 8080;

const mysql = require('mysql');  // mysql 모듈 로드
const conn = {  // mysql 접속 설정
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'shameonme',
    database: 'aresa-apart'
};



const historicalPriceRoutes = require("./routes/HistoricalPrice");
const futurePriceRoutes = require("./routes/FuturePrice");

app.use("/aresa-api/historical_price", historicalPriceRoutes);
app.use("/aresa-api/future_price", futurePriceRoutes);

app.listen(port, () => {
    console.log(`listening on ${port}`)
})

