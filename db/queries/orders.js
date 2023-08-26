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
  return db.query(`INSERT INTO orders (phone_number, date, status) VALUES ($1, $2, $3 ) RETURNING *;`, [order.phone_number, order.date, order.status])
};

const createOrder1 = (ownerId, order) => {
  const queryParams = [order.phoneNumber];

  const queryStr = `INSERT INTO orders (phone_number, date, status)
    VALUES ($1, CURRENT_DATE, 'Pending') RETURNING *`;
  // console.log(queryParams);
  return db.query(queryStr, queryParams)
    .then(data => {
      const createdOrder = data.rows[0];
      console.log("created order:", createdOrder);
      createOrderItems(createdOrder.id, order.items);
    });
};

//TODO: create a function that creates order items
const createOrderItems = function (orderId, items) {
  let queryStr = `INSERT INTO  order_food_items (order_id, food_item_id, quantity) VALUES `;
  // Initialize with the orderId as the first parameter
  const queryParams = [orderId];

  for (const cartItem of items) {
    const item = cartItem.item;
    console.log(orderId, item)
    // Add the values to the queryParams array
    queryParams.push(item.id, cartItem.count);

    queryStr += `($1, $${queryParams.length - 1}, $${queryParams.length}), `;
  }
  // Remove the trailing comma and space from the queryStr
  queryStr = queryStr.slice(0, -2);
  db.query(queryStr, queryParams)
    .then(data => {
      console.log("The food item inserted:", data.rows[0]);
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

const loadOrders = function () {
  return db.query(`SELECT * FROM order_food_items
  JOIN orders ON orders.id = order_food_items.order_id
  JOIN food_items ON food_items.id = order_food_items.food_item_id 
 ORDER BY date;`)
    .then((result) => {
      console.log(result.rows);
      return result.rows; //return the order
    })
    .catch((error) => {
      console.log(error.message);
    });
};


module.exports = { getOrders, createOrder1, updateOrderStatus, loadOrders, createOrder };
