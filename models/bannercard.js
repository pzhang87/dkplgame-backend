'use strict';
module.exports = (sequelize, DataTypes) => {
  var BannerCard = sequelize.define('BannerCard', {
    chance: DataTypes.FLOAT
  }, {});
  BannerCard.associate = function(models) {
    
  };
  return BannerCard;
};
