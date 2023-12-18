const express = require('express');
const router  = express.Router();
const db = require('../db/queries/orders');


//creates a new order
router.post('/', (req, res) => {
  const order = req.body;
  
  console.log("order:", order);
  
  if (order.items === 0) {
    return res.status(400).json({ error: 'order is empty' });
  }
  const ownerId = 1;

  
  //createOrder
  db.createOrder1(ownerId, order)
    .then(createdOrder => {
      res.json({ order: createdOrder});
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//modifies existing order (changes the status)
router.post('/:id', (req, res) => {
  // const ownerId = req.session.id;
  const orderId = req.params.id;
  const newStatus = req.body.newStatus;

  db.updateOrderStatus(orderId, newStatus)
    .then(updatedOrder => {
      res.json({ updatedOrder });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/', (req, res) => {
  // const ownerId = req.session.userId;
  const ownerId = 1;
  db.loadOrders(ownerId)
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