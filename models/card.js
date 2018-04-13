module.exports = function(orm, { INTEGER, STRING, ...Sequelize}){
  const Card = orm.define('card', {
    rarity: STRING,
    person: STRING
  })

  return Card;
}
