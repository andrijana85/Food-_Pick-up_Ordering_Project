// all the renders go here
//index, menu, orders

const express = require('express');
const router  = express.Router();

router.get('/login/:id', (req, res) => {
  //sets the cookie and redirect to /orders
  const userId = req.params.id;
  req.session.userId = userId;
  console.log(userId);
  res.redirect('/orders');
});

router.get('/logout', (req, res) => {
  //clears the cookie and redirect to /
  req.session.destroy(err => {
    if (err) {
      console.error(err);
    }
    res.redirect('/');
  });
});

router.get('/', (req, res) => {
//check for user cookie and redirect if needed
  if (req.session.userId) {
    res.redirect('/orders');
    return;
  }
  res.render('index');
});

router.get('/menu/:id', (req, res) => {
  //check for user cookie and redirect to /order if exists
  if (req.session.userId) {
    res.redirect('/orders');
    return;
  }
  res.render('menu');
});

router.get('/orders', (req, res) => {
  //check for user cookie , if no cookie go to / page
  if (!req.session.userId) {
    res.redirect('/');
    return;
  }
  res.render('orders');
});

module.exports = router;