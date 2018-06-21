const express = require('express')
const Router  = express.Router();
const DB      = require('../db/connection');
const User    = DB.models.User
const Card    = DB.models.Card
const roll    = require('../helpers/roll')

function error (res, err) {
  response.status(500)
  response.json({error: err})
}

// profile home
Router.get('/profile', (req, res) => {
  User.findOne({
    where: {
      discordID: req.user.discordID
    }
  }).then(user => {
    res.json(user);
  })
})

// generic handler for whenever someone tries to update a user's properties
Router.put('/users/:discordID', (req, res)=> {
  var { method, ...args } = req.query
  User.findOne({
    where: {
      discordID: req.params.discordID
    }
  }).then((user) => {
    try {
      user[method](args);
    }
    catch(error) {
      // log the error, but still send a response
      console.log(error);
      return user;
    }
  }).then(result => {
    res.json(result);
  })
})

Router.put('/users/:discordID/roll', (req, res)=> {
  var { method, ...args } = req.query
  User.findOne({
    where: {
      discordID: req.params.discordID
    }
  }).then((user) => {
    try {

    }
    catch(error) {
      // log the error, but still send a response
      console.log(error);
      return user;
    }
  }).then(result => {
    res.json(result);
  })
})

Router.put('/users/:discordID')

module.exports = Router;
