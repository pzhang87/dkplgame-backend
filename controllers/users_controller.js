const express = require('express')
const Router  = express.Router();
const DB      = require('../db/connection');
const User  = DB.models.User

function error (res, err) {
  response.status(500)
  response.json({error: err})
}

// find all
Router.get('/users', (req, res) => {
  User.findAll().then((users) => {
    res.json(users)
  })
})

// find one
Router.get('/users/:discordID', (req, res) => {
  User.findOne({
    where: {
      discordID: req.params.discordID
    }
  }).then((users) => {
    res.json(users)
  })
})

// add user
Router.post('/users', (req, res) => {
  User
  .findOrCreate({
    where: {
      discordID: req.query.discordID
    },
    defaults: {
      rocks: 0
    }
  }).spread((user, created) => {
    res.json(user.get({
      plain: true
    }))
  })
})

module.exports = Router;
