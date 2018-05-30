const express = require('express')
const Router  = express.Router();
const DB      = require('../db/connection');
const User  = DB.models.User
const Card  = DB.models.Card

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
  var { method } = req.query
  User.findOne({
    where: {
      discordID: req.params.discordID
    }
  }).then((user) => {
    try {
      user[method]();
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

module.exports = Router;
