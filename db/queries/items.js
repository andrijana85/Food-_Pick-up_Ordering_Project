const db = require('../connection');

//strech, take ownerId as parametar if we want to add more restaurants
const loadItems = () => {
  return db.query('SELECT * FROM food_items;')
    .then(data => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const getFoodItem = function(id) {
  return db.query(`SELECT * FROM items WHERE id = $1;`, [id])
    .then((result) => {
      console.log(result.rows);
      return result.rows[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};
const addItem = (foodItems) => {
  const queryParams = [foodItems.id,
    foodItems.name,
    foodItems.description,
    foodItems.price,
    foodItems.image_url];

  const queryStr = `INSERT INTO food_items (id, name, description, price, image_url)
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;
  return db. query(queryStr, queryParams)
    .then(data => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};


const deleteItem = (itemId) => {
  return db.query('SELECT * FROM food_items WHERE id = $1;',[itemId])
    .then(() => {
      return;
    })
    .catch((error) => {
      console.log(error.message);
    });
};


module.exports = { loadItems, addItem, deleteItem, getFoodItem};