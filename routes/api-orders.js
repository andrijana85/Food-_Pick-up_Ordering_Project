const express = require('express');
const router  = express.Router();
const db = require('../db/queries/orders');


//creates a new order
router.post('/', (req, res) => {
  const ownerId = req.session.id;
  //createOrder
  req.json({id:1234});
  return;
  
  db.createOrder(ownerId, req.body.order)
    .then(order => {
      res.json({ order });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//modifies existing order (changes the status)
router.post('/:id', (req, res) => {
  const ownerId = req.session.id;
  db.getOrders(ownerId)
    .then(orders => {
      res.json({ orders });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// this one might work
router.get('/', (req, res) => {
  const ownerId = req.session.userId;
  db.getOrders(ownerId)
    .then(orders => {
      res.json({ orders });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;