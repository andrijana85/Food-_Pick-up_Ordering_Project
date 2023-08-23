const db = require('../connection');


const getOrders = function(ownerId) {
  return db.query('SELECT * FROM orders WHERE id = $1 ORDER BY date;', [ownerId])
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const createOrder = (order) => {
  const queryParams = [order.phoneNumber, order.totalPrice];

  const queryStr = `INSERT INTO orders (phone_number, date, totalPrice, status)
    VALUES ($1, CURRENT_DATE, $2, 'P', ) RETURNING *`;
  return db. query(queryStr, queryParams)
    .then(data => {
      const order = data.rows[0];
      return createOrderItems(order.id, order.items);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const createOrderItems = function(items) {
  let queryString = `INSERT INTO  order_food_items (order_id, food_item_id, quantity) VALUES `;
  ;
}

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

const loadOrders = function(ownerId) {
  return db.query(`SELECT * FROM order_food_items 
  JOIN orders ON orders.id = order_food_items.order_id
  JOIN food_items ON food_items.id = order_food_items.food_item_id 
 ORDER BY date;`, [ownerId])
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};
module.exports = { getOrders, createOrder, updateOrderStatus, loadOrders};