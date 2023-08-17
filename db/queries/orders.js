const db = require('../connection');




const getOrders = function(id) {
  return db.query('SELECT * FROM orders ORDER BY date;')
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};


module.exports = { getOrders };