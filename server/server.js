const express = require('express');

const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

// router 연결
const historicalPriceRouter = require("./routes/HistoricalPrice");
const futurePriceRouter = require("./routes/FuturePrice");

app.use(historicalPriceRouter);
app.use(futurePriceRouter);

app.use('/', (req, res, next) => {
    res.render('main');
});

// 에러 처리
app.use((req, res) => {
    res.status(404).send('Page Not found.');
})

app.use((req, res) => {
    res.status(500).send("Something's wrong.");
})

// 서버 실행
app.listen(8080);

