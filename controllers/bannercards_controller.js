const express = require('express')
const Router  = express.Router();
const DB      = require('../db/connection');
const Banner  = DB.models.Banner
const BannerCard  = DB.models.BannerCard
const Card  = DB.models.Card

function error (res, err) {
  response.status(500)
  response.json({error: err})
}

Router.get('/banners/:bannerID/cards', (req, res) => {
  BannerCard.findAll({
    where: {
      bannerId: req.params.bannerID
    }
  }).then((bannerCards) => {
    res.json(bannerCards)
  })
})

module.exports = Router;
