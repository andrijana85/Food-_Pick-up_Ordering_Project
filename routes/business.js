const express = require('express');
const router  = express.Router();
<<<<<<< HEAD
const db = require('../db/queries/users');


router.get('/', (req, res) => {
  db.getBusinesses()
    .then(businesses => {
      res.render('business-list', {businesses});
    })
    .catch(error => {
      console.log(error.message);
      res.status(500).send('Server Error');
    });
});
router.get('/:id', (req, res) => {
  const businessId = req.params.id;
  db.getBusinessesById(businessId)
    .then(business => {
      if (!business) {
        res.status(404).send('Business is not found');
      } else {
        res.render('business-details', {business});
      }
=======
const db = require('../db/connection');


router.get('/business', (req, res) => {
  db.getBusinesses()
    .then(businesses => {
      res.render('busines-list', {businesses});
>>>>>>> 681c4f3 ( add user-stories file)
    })
    .catch(error => {
      console.log(error.message);
      res.status(500).send('Server Error');
    });
});

<<<<<<< HEAD
router.get('/:id', (req, res) => {
=======
router.get('/business/:id', (req, res) => {
>>>>>>> 681c4f3 ( add user-stories file)
  res.render('business');
});

module.exports = router;