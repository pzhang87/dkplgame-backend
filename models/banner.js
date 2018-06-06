'use strict';
module.exports = (Sequelize, DataTypes) => {
  var Banner = Sequelize.define('Banner', {
    name: DataTypes.STRING,
    startTime: DataTypes.TIMESTAMP,
    endTime: DataTypes.TIMESTAMP
  }, {});
  Banner.associate = function(models) {
    models.Banner.belongsToMany(models.Card, {
      through: "banner_cards"
    })
  };
  return Banner;
};
