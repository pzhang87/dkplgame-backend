const Sequelize = require('sequelize');
const orm = new Sequelize('postgres:///dkplgame');

const User = orm.import('../models/user')
const Card = orm.import('../models/card')

User.hasMany(Card)
Card.belongsToMany(User, {through: 'UserCard'})

module.exports = {
  Sequelize,
  orm,
  models: { User, Card }
}
