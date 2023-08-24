const db = require('../connection');


const getOrders = function() {
  return db.query('SELECT * FROM orders ORDER BY date;')
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    });
};

const createOrder = (ownerId, order) => {
  const queryParams = [order.phoneNumber];

  const queryStr = `INSERT INTO orders (phone_number, date, status)
    VALUES ($1, CURRENT_DATE, 'P') RETURNING *`;
  // console.log(queryParams);
  return db.query(queryStr, queryParams)
    .then(data => {
      const createdOrder = data.rows[0];
      console.log("created order:", createdOrder);
      createOrderItems(createdOrder.id, order.items);
    });
};

//TODO: create a function that creates order items
const createOrderItems = function(orderId, items) {
  let queryStr = `INSERT INTO  order_food_items (order_id, food_item_id, quantity) VALUES `;
  const queryParams = [];
  
  // for (const cartItem of items) {
  //   const item = cartItem.item;
  //   //append more values to the query string
  //   queryStr += `($1, $${queryParams.length + 2}, $${queryParams.length + 3}), `;
  // }
  for (let index = 0; index < items.length; index++) {
    const cartItem = items[index];
    const item = cartItem.item;
    if (index === items.length - 1) {
      queryStr += `(${index * 3 + 1}, ${index * 3 + 2}, ${index * 3 + 3}) RETURNING *;`;
    } else {
      queryStr += `(${index * 3 + 1}, ${index * 3 + 2}, ${index * 3 + 3}), `;
    }
  }
  //insert 2 items to db,
  //INSERT INTO  order_food_items (order_id, food_item_id, quantity) VALUES
  // ($1, $2, $3), ($4, $5, $6) RETURNING *;
  db.query(queryStr, queryParams)
    .then(data => {
      console.log("The food item inserted:",data.rows[0]);
    });
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