/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

router.get('/', (req, res) => {
  const testdata = [
    {id:1, name:"hotdog", price: 999 },
    {id:2, name:"pizza", price: 999 },
    {id:3, name:"coffe", price: 999 },
    {id:4, name:"chili", price: 999 },
    {id:5, name:"hambuger", price: 999 },
    {id:6, name:"hambuger2", price: 989 },
  ];
  res.json(testdata);

  // userQueries.getUsers()
  //   .then(users => {
  //     res.json({ users });
  //   })
  //   .catch(err => {
  //     res
  //       .status(500)
  //       .json({ error: err.message });
  //   });
});

module.exports = router;
