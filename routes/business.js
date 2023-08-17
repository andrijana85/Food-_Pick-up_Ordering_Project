const express = require('express');
const router  = express.Router();
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
    })
    .catch(error => {
      console.log(error.message);
      res.status(500).send('Server Error');
    });
});

router.get('/:id', (req, res) => {
  res.render('business');
});

module.exports = router;