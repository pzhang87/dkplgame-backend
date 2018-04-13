const express = require('express')
const Router  = express.Router();
const DB      = require('../db/connection');
const Card  = DB.models.Card

function error (res, err) {
  response.status(500)
  response.json({error: err})
}

Router.get('/cards', (req, res) => {
  Card.findAll().then((cards) => {
    res.json(cards)
  })
})

module.exports = Router;