const db = require('../connection');
//where
const getItems = (ownerId) => {
  return db.query('SELECT * FROM food_items;')
    .then(data => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = { getItems };