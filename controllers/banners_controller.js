const express = require('express')
const Router  = express.Router();
const DB      = require('../db/connection');
const Banner  = DB.models.Banner

function error (res, err) {
  response.status(500)
  response.json({error: err})
}

Router.get('/banners', (req, res) => {
  Banner.findAll().then((banner) => {
    res.json(banner)
  })
})

Router.get('/banners/:bannerID', (req, res) => {
  Banner.findAll({
    where: {
      id: req.params.bannerID
    }
  }).then((banner) => {
    res.json(banner)
  })
})

module.exports = Router;
