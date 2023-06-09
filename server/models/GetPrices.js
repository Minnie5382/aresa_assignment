const db = require('../db');

module.exports = class GetPrices {
  constructor(aptId, year, monthStart, monthEnd) {
    this.aptId = aptId;
    this.year = year;
    this.monthStart = monthStart;
    this.monthEnd = monthEnd;
  }

  getFuturePrices(callback) {
    const postFuturePriceQuery = `select Apartment.aptId, Apartment.aptName, year, month, FuturePrice.price\n`+
            `from FuturePrice\n`+
            `join Apartment on FuturePrice.aptId = Apartment.aptId\n`+
            `where Apartment.aptId = ? and Apartment.status = "ACTIVE" and FuturePrice.status = "ACTIVE" and\n`+
            `year = ? and month >= ? and month <= ?;`;
    
    const postFuturePriceParams = [this.aptId, this.year, this.monthStart, this.monthEnd];

    db.query(postFuturePriceQuery, postFuturePriceParams, (err, res) => {
        if (err) throw err;
        callback(res);
    })
  }

  getHistoricalPrices(callback) {
    const postHisPriceQuery = `select Apartment.aptId, Apartment.aptName, year, month, HistoricalPrice.price\n`+
            `from HistoricalPrice\n`+
            `join Apartment on HistoricalPrice.aptId = Apartment.aptId\n`+
            `where Apartment.aptId = ? and Apartment.status = "ACTIVE" and HistoricalPrice.status = "ACTIVE" and\n`+
            `year = ? and month >= ? and month <= ?;`;
    
    const postHisPriceParams = [this.aptId, this.year, this.monthStart, this.monthEnd];

    db.query(postHisPriceQuery, postHisPriceParams, (error, results, fields) => {
        if (error) throw error;
        callback(results, fields);
    })
  }


}
