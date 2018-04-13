const express = require('express')
const Router  = express.Router();
const DB      = require('../db/connection');
const User  = DB.models.User

function error (res, err) {
  response.status(500)
  response.json({error: err})
}

Router.get('/users', (req, res) => {
  User.findAll().then((users) => {
    res.json(users)
  })
})

module.exports = Router;
