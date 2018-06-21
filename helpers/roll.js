const models = require('../models');
const BANNERS = require('../config/20180614.json').banners;
const User = models.user;
const card = models.card;

module.exports = function(args){
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

    // TODO: look into new Map(); to potentially rewrite

    let results = pulls.map((pull) => {
      // this is the dumb way but let's do it anyway
      if (pull >= odds["N"][0] && pull < odds["N"][1]){
        return "N"
      } else if (pull >= odds["R"][0] && pull < odds["R"][1]){
        return "R"
      } else if (pull >= odds["SR"][0] && pull < odds["SR"][1]){
        return "SR"
      } else if (pull >= odds["SSR"][0] && pull < odds["SSR"][1]){
        return "SSR"
      }
    })

    // with our results array, we should query the database for a count of cards

    // then, determine the identity of each card, via each individual card's odds
    // as determined on bannerCardsOdds

    // then, pay the cost and insert the cards as they belong to the user
    this.decrement({rocks: rolls})
  } else {
    return null;
  }
}
