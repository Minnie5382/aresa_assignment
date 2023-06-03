const express = require('express');
const bodyParser = require('body-parser');
const app = express();
port = 8080;

app.use(bodyParser.json());

const historicalPriceRoutes = require("./routes/HistoricalPrice");
const futurePriceRoutes = require("./routes/FuturePrice");

app.use("/aresa-api/historical_price", historicalPriceRoutes);
app.use("/aresa-api/future_price", futurePriceRoutes);


app.listen(port, () => {
    console.log(`listening on ${port}`)
})

// // POST historical_price
// app.post('/aresa-api/historical_price/:aptId', (req, res) => {
//     const aptId = req.params.aptId;
//     const body = req.body

//     res.send(body)
// })

// // GET historical_price
// app.get('/aresa-api/historical_price/:aptId', (req, res) => {
//     console.log(req.body);
// })
