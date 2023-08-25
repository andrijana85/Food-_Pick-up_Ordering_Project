const db = require('../connection');




const getOrders = function (id) {
  return db.query('SELECT * FROM orders ORDER BY date;')
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const createOrder = function (order) {
  return db.query(`INSERT INTO orders (customer_id, business_id, date, status) VALUES ($1, $2, $3, $4 ) RETURNING *;`, [order.customer_id, order.business_id, order.date, order.status])
    .then((result) => {
      console.log(result.rows);
      return result.rows[0]; //return the order
    })
    .catch((error) => {
      console.log(error.message);
    });
}


module.exports = { getOrders, createOrder };
