const db = require('../connection');


const getFoodItems = () => {
  return db.query('SELECT * FROM food_items;')
    .then(data => {
      return data.rows;
    });
};

//stretch, take ownerId as parametar if we want to add more restaurants
const getFoodItemsByOwner = function(ownerId) {
  //we are not using ownerid now, maybe later
  return db.query(`SELECT * FROM food_items`, [])
    .then((result) => {
      console.log(result.rows);
      return result.rows;
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
    });
};


const deleteItem = (itemId) => {
  return db.query('SELECT * FROM food_items WHERE id = $1;',[itemId])
    .then(() => {
      return;
    });
};


module.exports = { getFoodItems, addItem, deleteItem, getFoodItemsByOwner};