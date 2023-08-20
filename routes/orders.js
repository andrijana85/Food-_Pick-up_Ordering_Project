const express = require('express');
const router = express.Router();
const db = require('../db/queries/orders');
const { sendTextMessage } = require('../twilio/twilio');
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

module.exports = router;
