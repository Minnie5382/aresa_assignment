const db = require('../db');

module.exports = class GetPrices {
  constructor(aptId, year, monthStart, monthEnd) { // get 요청을 위한 파라미터
    this.aptId = aptId;
    this.year = year;
    this.monthStart = monthStart;
    this.monthEnd = monthEnd;
  }

  getFuturePrices(callback) {
    const postFuturePriceQuery = 'select Apartment.aptId, Apartment.aptName, year, month, FuturePrice.price\n'+
    'from FuturePrice\n'+
    'join Apartment on FuturePrice.aptId = Apartment.aptId\n'+
    'where Apartment.aptId = ? and Apartment.status = "ACTIVE" and FuturePrice.status = "ACTIVE" and'+
    'year = ? and month >= ? and month <= ?;';
    
    const postFuturePriceParams = [this.aptId, this.year, this.monthStart, this.monthEnd];

    db.query(postFuturePriceQuery, postFuturePriceParams, (err, res) => {
        if (err) throw err;
        callback(res);
    })
  }


}
