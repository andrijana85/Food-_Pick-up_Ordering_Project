const db = require('../connection');


<<<<<<< HEAD

const getFoodItems = function (id) {
=======
const getBusinesses = () =>{
  return db.query('SELECT * FROM business;')
    .then(data => {
      return data.rows;
    })
    .catch(error => {
      console.log(error.message);
    });
};

const getFoodItems = function(id) {
>>>>>>> 681c4f3 ( add user-stories file)
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
module.exports = { getUsers, getFoodItems };
=======
module.exports = { getUsers , getBusinesses, getFoodItems};
>>>>>>> 681c4f3 ( add user-stories file)
