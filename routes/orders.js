const express = require('express');
const router = express.Router();
const db = require('../db/queries/orders');
const { sendTextMessage } = require('../helpers/twilio');
// TODO: message response from twilio

router.get('/', (req, res) => {
  db.getOrders()
    .then(orders => {
      res.json(orders);
    })
    .catch(error => {
      console.log(error.message);
      res.status(500).json({ err: "internal error" });
    });
});

router.post('/', (req, res) => { //create an order
  const newOrder = {
    customer_id: 1,
    business_id: 1,
    phoneNumber: '5197290185',
    date: new Date().toISOString(),
    status: 'pending'
  };
  db.createOrder(newOrder)
    .then(order => {
      sendTextMessage(`New order from ${newOrder.phoneNumber} is being processed! Order Date: ${order.date}`, newOrder.phoneNumber);
      res.json(order);
    })
    .catch(error => {
      console.log(error.message);
      res.status(500).json({ err: "internal error" });
    });
});

module.exports = router;
