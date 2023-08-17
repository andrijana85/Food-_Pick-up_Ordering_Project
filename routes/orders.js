const express = require('express');
const router  = express.Router();
const db = require('../db/queries/orders');

router.get('/', (req, res) => {
    db.getOrders()
      .then(orders => {
        res.render('orders-list', {orders});
      })
      .catch(error => {
        console.log(error.message);
        res.status(500).send('Server Error');
      });
  });

  module.exports = router;