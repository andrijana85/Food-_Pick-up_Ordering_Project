const db = require('../connection');


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

const createOrder = (order) => {
  const queryParams = [order.phone_number,
    order.total,
    'pending',
    order.tax];

  const queryStr = `INSERT INTO orders (phone_number, date, total, status, tax)
    VALUES ($1, CURRENT_DATE, $2, $3, $4) RETURNING *`;
  return db. query(queryStr, queryParams)
    .then(data => {
      return data.rows[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = { getOrders, createOrder };