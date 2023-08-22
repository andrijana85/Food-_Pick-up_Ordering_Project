const express = require('express');
const router  = express.Router();
const db = require('../db/queries/orders');


//creates a new order
router.post('/', (req, res) => {
  // const ownerId = req.session.id;
  const phoneNumber = req.body.phoneNumber;
  const total = req.body.total;
  
<<<<<<< HEAD
  db.createOrder(ownerId, req.body.order)
    .then(order => {
      res.json({ order });
=======
  const order = {
    phoneNumber: phoneNumber,
    total: total,
    date: new Date().toISOString()
  };

  //createOrder
  db.createOrder(order)
    .then(createdOrder => {
      res.json({ order: createdOrder});
>>>>>>> 3eecbfa3816d1f2242f94514487271ce42822d76
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

// this one might work - DONE
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