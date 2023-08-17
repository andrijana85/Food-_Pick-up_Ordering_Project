const db = require('../connection');




const getFoodItems = function(id) {
  return db.query(`SELECT * FROM items WHERE id = $1`, [id])
    .then((result) => {
      console.log(result.rows);
      return result.rows[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

<<<<<<< HEAD
const getOrders = () => {
  return db.query('SELECT * FROM orders;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUsers , getBusinesses, getFoodItems, getBusinessesById, getOrders};
=======
module.exports = { getUsers , getFoodItems };
>>>>>>> 01a295e76e09d3cc7e3e8c4b208de412624fa6de
