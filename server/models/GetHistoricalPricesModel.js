const db = require('../db');

module.exports = class GetHistoricalPricesModel {
  constructor(aptId, year, monthStart, monthEnd) { // get 요청을 위한 파라미터
    this.aptId = aptId;
    this.year = year;
    this.monthStart = monthStart;
    this.monthEnd = monthEnd;
  }

  getHistoricalPrices(callback) {
    const postHisPriceQuery = 'select Apartment.aptId, Apartment.aptName, year, month, HistoricalPrice.price\n'+
    'from HistoricalPrice\n'+
    'join Apartment on HistoricalPrice.aptId = Apartment.aptId\n'+
    'where Apartment.aptId = ? and Apartment.status = "ACTIVE" and HistoricalPrice.status = "ACTIVE" and'+
    'year = ? and month >= ? and month <= ?;';
    
    const postHisPriceParams = [this.aptId, this.year, this.monthStart, this.monthEnd];

    db.query(postHisPriceQuery, postHisPriceParams, (err, res) => {
        if (err) throw err;
        callback(res);
    })
  }
}