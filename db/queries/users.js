const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'midterm'
});

const db = require('../connection');




const getFoodItems = function(id) {
  return db.query('SELECT * FROM items')
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


const getRestaurants = () => {
  return db.query('SELECT * FROM business')
  .then(data => {
    return data.rows;
  });
};

module.exports = { getRestaurants, getFoodItems, getUsers };
