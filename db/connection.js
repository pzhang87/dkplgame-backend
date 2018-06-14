const Sequelize = require('sequelize');
const orm = new Sequelize('postgres:///dkplgame');

const User = orm.import('../models/user')
const Card = orm.import('../models/card')
const Banner = orm.import('../models/banner')
const BannerCard = orm.import('../models/bannercard')

module.exports = {
  Sequelize,
  orm,
  models: { User, Card, Banner, BannerCard }
}
