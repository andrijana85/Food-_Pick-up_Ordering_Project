const express = require('express');
const router  = express.Router();
const db = require('../db/connection');


router.get('/business', (req, res) => {
  db.getBusinesses()
    .then(businesses => {
      res.render('busines-list', {businesses});
    })
    .catch(error => {
      console.log(error.message);
      res.status(500).send('Server Error');
    });
});

router.get('/business/:id', (req, res) => {
  res.render('business');
});

module.exports = router;