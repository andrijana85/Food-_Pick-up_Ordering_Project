const db = require('../connection');


const getOrders = function() {
  return db.query('SELECT * FROM orders ORDER BY date;')
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    });
};

const createOrder = (order) => {
  const queryParams = [order.phoneNumber];

  const queryStr = `INSERT INTO orders (phone_number, date, status)
    VALUES ($1, CURRENT_DATE, 'P') RETURNING *`;
  // console.log(queryParams);
  return db.query(queryStr, queryParams)
    .then(data => {
      const createdOrder = data.rows[0];
      console.log("created order:", createdOrder);
      if (order.items && order.items.length > 0) {
        createOrderItems(createdOrder.id, order.items);
        return createdOrder;
      }
    });
};

const createOrderItems = function(orderId, items) {
  let queryStr = `INSERT INTO  order_food_items (order_id, food_item_id, quantity)
   VALUES ($1, $2, $3) RETURNING *`;
   
  for (const item of items) {
    const queryParams = [orderId, item.item.id, item.count];
    db.query(queryStr, queryParams)
      .then(data => {
        console.log("The food item inserted:",data.rows[0]);
      });
  }
};

const updateOrderStatus = (orderId, newStatus) => {
  const queryParams = [newStatus, orderId];

  const queryStr = `UPDATE orders SET status = $1 WHERE id = $2 RETURNING *`;
  return db.query(queryStr, queryParams)
    .then(data => {
      if (data.rows.length > 0) {
        return data.rows[0];
      }
    });
};

const loadOrders = function() {
  return db.query(`SELECT * FROM order_food_items 
  JOIN orders ON orders.id = order_food_items.order_id
  JOIN food_items ON food_items.id = order_food_items.food_item_id 
 ORDER BY date;`)
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    });
};
module.exports = { getOrders, createOrder, updateOrderStatus, loadOrders, createOrderItems};