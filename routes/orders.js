const express = require('express');
const router  = express.Router();
const db = require('../db/queries/users');


router.get('/orders', (req, res) => {
    res.render('orders');
  });
  