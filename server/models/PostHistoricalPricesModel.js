const db = require('../db');

module.exports = class PostHistoricalPricesModel {
  constructor(aptId, year, monthStart, values) { // post 요청을 위한 파라미터
    this.aptId = aptId;
    this.year = year;
    this.monthStart = monthStart;
    this.values = values;
    // for (value of values) {
    //     this.values.push(value);
    // }
  }

  postHistoricalPrices() {
    const postHisPriceQuery = 'INSERT INTO HistoricalPrice (aptId, year, month, price) VALUES (?, ?, ?, ?)';

    for (i in this.values.length) {
        var month = this.monthStart + i;
        const postHisPriceParams = [this.aptId, this.year, month, this.values[i]] ;
        db.query(postHisPriceQuery, postHisPriceParams, (err, res) => {
            if (err) throw err;
            console.log('Post saved:', this);
        });
    }
  }
}
