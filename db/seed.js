const DB = require('./connection');

const seeds = {
  users: require('./seeds_users'),
  cards: require('./seeds_cards')
}

DB.models.User.bulkCreate(seeds.users).then(
  DB.models.Card.bulkCreate(seeds.cards).then(_ => process.exit())
)
