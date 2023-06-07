const db = require('../db');

module.exports = class PostPrices {
  constructor(aptId, year, monthStart, values) { // post 요청을 위한 파라미터
    this.aptId = Number(aptId);
    this.year = Number(year);
    this.monthStart = Number(monthStart);
    this.values = values.split(',');
  }

  async postFuturePrices() {
    const postFuturePriceQuery = 'INSERT INTO FuturePrice (aptId, year, month, price) VALUES (?, ?, ?, ?)';
    const promises = [];

    for (i in this.values.length) {
      const month = this.monthStart + i;
      const postFuturePriceParams = [this.aptId, this.year, month, Number(this.values[i])] ;

      const promise = new Promise((resolve, reject) => {
        db.query(postFuturePriceQuery, postFuturePriceParams, (err, res) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(res);
          }
        });
      });
      promises.push(promise);
    }
    await Promise.all(promises);
  }

  async postHistoricalPrices() {
    const postHisPriceQuery = 'INSERT INTO HistoricalPrice (aptId, year, month, price) VALUES (?, ?, ?, ?)';
    const promises = [];

    for (i in this.values.length) {
      const month = this.monthStart + i;
      const postHisPriceParams = [this.aptId, this.year, month, Number(this.values[i])] ;

      const promise = new Promise((resolve, reject) => {
        db.query(postHisPriceQuery, postHisPriceParams, (err, res) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(res);
          }
        });
      });
      promises.push(promise);
    }
    await Promise.all(promises);
  }
}