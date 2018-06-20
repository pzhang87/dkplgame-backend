'use strict';

const BANNERS = require('../config/20180614.json').banners;

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
  }, {})

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
    let { bannerId, rolls } = args
    if (this.rocks >= rolls){
      // generate an array of rolls
      // ES6 implementation. isn't this cool?
      let pulls = Array.from({length: rolls}, ()=> Math.floor(Math.random() * Math.floor(100)))

      // have something parse this array into odds: for each element in array, decide
      // on whether or not it is N/R/SR/SSR based on the bannerOdds
      // this will necessitate a banner(global)Odds table

      let odds = {
        "N": [0, BANNERS[bannerId]["odds"]["N"] - 1],
        "R": [BANNERS[bannerId]["odds"]["N"], 99 - BANNERS[bannerId]["odds"]["R"]],
        "SR": [100 - BANNERS[bannerId]["odds"]["SR"], 99 - BANNERS[bannerId]["odds"]["SSR"]],
        "SSR": [100 - BANNERS[bannerId]["odds"]["SSR"], 99]
      }

      pulls.map((pull) => {

      })

      // then, determine the identity of each card, via each individual card's odds
      // as determined on bannerCardsOdds

      // then, pay the cost and insert the cards as they belong to the user
      this.decrement({rocks: rolls})
    } else {
      return null;
    }
  }

  return User;
}
