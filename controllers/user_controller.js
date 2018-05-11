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

Router.post('/users/:discordID/roll', (req, res) => {
  User.findOne({
    where: {
      discordID: req.params.discordID
    }
  }).then(user => {
    // write a function that
    // 1. spends resources, if available
    // 2a. determines what card you got and inserts it as a relationship in the UserCards
    // 2b. or tells you that you don't have enough rocks
  }).then(result => {
    res.json(result);
  })
})

Router.post('/users/:discordID/bonus', (req, res) => {
  User.findOne({
    where: {
      discordID: req.params.discordID
    }
  }).then(user => {
    return user.increment('rocks', {by: 1})
  }).then(result => {
    console.log(result);
    res.json(result);
  })
})

module.exports = Router;
