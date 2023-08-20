const express = require('express');
const router = express.Router();
const db = require('../db/queries/orders');

router.get('/', (req, res) => {
    db.getOrders()
      .then(orders => {
        res.render('orders-list', { orders }); // Render the EJS template with orders data
      })
      .catch(error => {
        console.log(error.message);
        res.status(500).json({ err: "internal error" });
      });
});

router.get('/html', (req, res) => {
    db.getOrders()
      .then(orders => {
        res.render('orders-list', { orders }); // Render the EJS template with orders data
      })
      .catch(error => {
        console.log(error.message);
        res.status(500).json({ err: "internal error" });
      });
});

router.get('/menu', async (req, res) => {
  try {
    const foodItems = await db.getFoodItems();
    res.render('menu', { foodItems }); // Render the EJS template with foodItems data
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/', (req, res) => {
  const { customer_id, business_id, total, tax } = req.body;

  db.generateNewOrderId()
      .then(newOrderId => {
          const currentDate = new Date();
          const newOrder = {
              id: newOrderId,
              customer_id,
              business_id,
              date: currentDate,
              total,
              status: 'Pending',
              tax,
              name
          };
          db.createOrder(newOrder)
              .then(createdOrder => {
                  // Send SMS
                  sendSMS(createdOrder);

                  res.status(201).json(createdOrder);
              })
              .catch(error => {
                  console.log(error.message);
                  res.status(500).json({ err: "internal error" });
              });
      })
      .catch(error => {
          console.log(error.message);
          res.status(500).json({ err: "internal error" });
      });
});

module.exports = router;
