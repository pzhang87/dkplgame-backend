module.exports = function(orm, { INTEGER, STRING, ...Sequelize}){
  const User = orm.define('user', {
    discordID: STRING,
    rocks: INTEGER
  })

  return User;
}
