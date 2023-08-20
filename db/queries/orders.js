const db = require('../connection');

// createOrders

const getOrders = function(ownerId) {
  return db.query('SELECT * FROM orders WHERE owner_id = $1 ORDER BY date;', [ownerId])
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = { getOrders };