module.exports = function(orm, { INTEGER, STRING, BOOLEAN, ...Sequelize}){
  const User = orm.define('user', {
    discordID: {
      type: STRING,
      allowNull: false,
      primaryKey: true
    },
    rocks: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    dailyLogin: {
      type: BOOLEAN,
      defaultValue: false
    }
  })

  User.prototype.collect = function(){
    if (this.dailyLogin === false){
      this.update({dailyLogin: true});
      return this.increment({rocks: 1});
    } else {
      return this;
    }
  }

  User.prototype.reset = function(){
    this.update({dailyLogin: false});
  }

  User.prototype.roll = function(){
    if (this.rocks >= 1){
      this.decrement({rocks: 1})
      // write a roll function here
    } else {
      return null;
    }
  }

  return User;
}
