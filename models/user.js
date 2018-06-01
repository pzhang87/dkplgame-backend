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

  User.prototype.roll = function(args){
    // wrap all of this shit in try/catch block at the end pls
    let { banner, rolls } = args
    if (this.rocks >= rolls){
      // generate an array of rolls
      // ES6 implementation
      let pulls = Array.from({length: rolls}, ()=> Math.floor(Math.random() * Math.floor(100)))

      // have something parse this array into odds: for each element in array, decide
      // on whether or not it is N/R/SR/SSR based on the bannerOdds
      // this will necessitate a banner(global)Odds table

      // then, determine the identity of each card, via each individual card's odds
      //

      // then, pay the cost
      this.decrement({rocks: rolls})
    } else {
      return null;
    }
  }

  return User;
}
