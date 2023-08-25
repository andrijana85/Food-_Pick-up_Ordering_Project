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

//createOrder query's parameter supdated by seeds.sql
const createOrder = function (order) {
  return db.query(`INSERT INTO orders (phone_number, date, status) VALUES ($1, $2, $3 ) RETURNING *;`, [order.phone_number, order.date, order.status])
    .then((result) => {
      console.log(result.rows);
      return result.rows[0]; //return the order
    })
    .catch((error) => {
      console.log(error.message);
    });
}


module.exports = { getOrders, createOrder };
