const db = require('../connection');


async function generateNewOrderId() {
  try {
      const query = 'SELECT MAX(id) AS max_id FROM orders';
      const result = await pool.query(query);
      const maxOrderId = result.rows[0].max_id;
      const newOrderId = maxOrderId ? maxOrderId + 1 : 1;
      return newOrderId;
  } catch (error) {
      throw error;
  }
};


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


module.exports = { getOrders, generateNewOrderId };