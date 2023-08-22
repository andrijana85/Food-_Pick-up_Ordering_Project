/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require('../db/queries/items');

//test this route
router.get('/', (req, res) => {
  //call the itemQueries.getItems(owner_id)
  const ownerId = req.session.ownerId || 1;
  db.getFoodItemsByOwner(ownerId)
    .then(items => {
      res.json({ items });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});




module.exports = router;
