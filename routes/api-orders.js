const express = require('express');
const router = express.Router();
const db = require('../db/queries/orders');
const { sendTextMessage, sendOrderConfirmation } = require('../helpers/twilio');



//creates a new order
router.post('/', (req, res) => {
  const order = req.body;

  // console.log("order:", order);

  if (order.items === 0) {
    return res.status(400).json({ error: 'order is empty' });
  }
  const ownerId = 1;
  const orderDetails = { // add hard data for database, order.sql not using
    phoneNumber: '5197290185',
    date: new Date().toISOString(),
    status: 'pending'
  }

  //createOrder
  db.createOrder1(ownerId, order)
    .then(createdOrder => {
      console.log('##1 order is ', createdOrder);
      sendTextMessage(`New order from ${orderDetails.phoneNumber} is being processed! Order Date: ${orderDetails.date}, Order Status: ${orderDetails.status}`, orderDetails.phoneNumber)
        .then(() => {
          sendOrderConfirmation({
            id: createdOrder.id,
            phone_number: orderDetails.phoneNumber
          })
        })
      console.log('##3 massage is sending');
      return res.json({ order: createdOrder });
    })
    .catch(err => {
      console.log('###0 error ', err.message);
      return res
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