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
  }).then((user) => {
    res.json(user)
  })
})

// add user
Router.put('/users', (req, res) => {
  let { discordID } = req.query;
  User.findOrCreate({
    where: {
      discordID: discordID
    }
  }).spread((user, created) => {
    res.json(user.get({
      plain: true
    }))
  })
})

module.exports = Router;
