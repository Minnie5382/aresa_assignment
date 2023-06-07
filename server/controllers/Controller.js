const PostPrices = require('../models/PostPrices');
const GetPrices = require('../models/GetPrices');

const postFuturePrices = (req, res, next) => {
  const { aptId, year, monthStart, values } = req.body;
  const postPrices = new PostPrices(aptId, year, monthStart, values);
  try {
    postPrices.postFuturePrices();
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const postHistoricalPrices = (req, res, next) => {
  const { aptId, year, monthStart, values } = req.body;
  const postPrices = new PostPrices(aptId, year, monthStart, values);
  try {
    postPrices.postHistoricalPrices();
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const getFuturePrices = (req, res) => {
  const aptId = req.param('aptId');
  const year = req.param('year');
  const monthStart = req.param('monthStart');
  const monthEnd = req.param('monthEnd');
  const getPrices = new GetPrices(aptId, year, monthStart, monthEnd);

  getPrices.getFuturePrices((results, fields) => {
    const prices = []
    if (results.length > 0 ) {
      for(let result of results) {
        prices.push(result.price)
      }
      if (result == null) res.sendStatus(500)
      res.render('prices', {
        aptId: aptId,
        year : year,
        monthStart : Number(monthStart),
        prices : prices
      })
    } else {
      res.sendStatus(404)
    }
  })
};

const getHistoricalPrices = (req, res) => {
  const aptId = req.param('aptId');
  const year = req.param('year');
  const monthStart = req.param('monthStart');
  const monthEnd = req.param('monthEnd');

  // const prices = []
  const getPrices = new GetPrices(aptId, year, monthStart, monthEnd);

  getPrices.getHistoricalPrices((results, fields) => {
    const prices = []
    if (results.length > 0 ) {
      for(let result of results) {
        prices.push(result.price)
      }
      if (result == null) res.sendStatus(500)
      res.render('prices', {
        aptId: aptId,
        year : year,
        monthStart : Number(monthStart),
        prices : prices
      })
    } else {
      res.sendStatus(404)
    }
  })
};

module.exports = { postFuturePrices, postHistoricalPrices, getFuturePrices, getHistoricalPrices };