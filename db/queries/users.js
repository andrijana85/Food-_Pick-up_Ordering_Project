const db = require('../connection');


const getBusinesses = () =>{
  return db.query('SELECT * FROM business;')
    .then(data => {
      return data.rows;
    })
    .catch(error => {
      console.log(error.message);
    });
};
const getBusinessesById = (id) =>{
  return db.query('SELECT * FROM business WHERE id = $1',[id])
    .then(data => {
      return data.rows[0];
    })
    .catch(error => {
      console.log(error.message);
      throw error;
    });
};

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

module.exports = { getUsers , getBusinesses, getFoodItems, getBusinessesById};
