module.exports = function(orm, { INTEGER, STRING, ...Sequelize}){
  const Card = orm.define('card', {
    rarity: {
      type: STRING
    },
    person: {
      type: STRING
    }
  })
  return Card;
}
