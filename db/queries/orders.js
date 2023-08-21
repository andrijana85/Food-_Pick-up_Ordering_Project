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

const createOrder = (phoneNumber, total) => {
  const queryParams = [phoneNumber, total, 'pending'];

  const queryStr = `INSERT INTO ordersitems (phone_number, date, total, status)
    VALUES ($1, CURRENT_DATE, $2, $3, ) RETURNING *`;
  return db. query(queryStr, queryParams)
    .then(data => {
      return data.rows[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const updateOrderStatus = (orderId, newStatus) => {
  const queryParams = [newStatus, orderId];

  const queryStr = `UPDATE orders SET status = $1 WHERE id = $2 RETURNING *`;
  return db. query(queryStr, queryParams)
    .then(data => {
      if (data.rows.length > 0) {
        return data.rows[0];
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
};
module.exports = { getOrders, createOrder, updateOrderStatus };