const { query } = require('express');
const db = require('../connection');

const getBusinesses = () => {
  return db.query('SELECT * FROM business;')
    .then(data => {
      return data.rows;
    })
    .catch(error => {
      console.log(error.message);
    });
};
const getBusinessesById = (id) => {
  return db.query('SELECT * FROM business WHERE id = $1', [id])
    .then(data => {
      return data.rows[0];
    })
    .catch(error => {
      console.log(error.message);
      throw error;
    });
};

module.exports = { getBusinesses, getBusinessesById };
