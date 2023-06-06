const PostPrices = require('../models/PostPrices');
const GetPrices = require('../models/GetPrices');

const postFuturePrices = (req, res) => {
  const { aptId, year, monthStart, values } = req.body;
  const postPrices = new PostPrices(aptId, year, monthStart, ...values);
  postPrices.postFuturePrices();

  res.render('main', { 
    aptId: aptId, 
    year : year,
    month : monthStart,
    values : values });
};

const postHistoricalPrices = (req, res) => {
  const { aptId, year, monthStart, values } = req.body;
  const postPrices = new PostPrices(aptId, year, monthStart, ...values);
  postPrices.postHistoricalPrices();

  res.render('main', { 
    aptId: aptId, 
    year : year,
    month : monthStart,
    values : values });
};

const getFuturePrices = (req, res) => {
  const { aptId, year, monthStart, monthEnd } = req.body;
  const getPrices = new GetPrices(aptId, year, monthStart, monthEnd);

  getPrices.getFuturePrices((result) => {
    res.render('main', {
      aptId : aptId,
      year : year,
      month : monthStart,
      values : result
    })
  })
};

const getHistoricalPrices = (req, res) => {
  const { aptId, year, monthStart, monthEnd } = req.body;
  const getPrices = new GetPrices(aptId, year, monthStart, monthEnd);

  getPrices.getHistoricalPrices((result) => {
    res.render('main', {
      aptId: aptId,
      year : year,
      month : monthStart,
      values : result
    })
  })
};

module.exports = { postFuturePrices, postHistoricalPrices, getFuturePrices, getHistoricalPrices };