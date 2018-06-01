'use strict';
module.exports = (sequelize, DataTypes) => {
  var Banner = sequelize.define('Banner', {
    name: DataTypes.STRING,
    startTime: DataTypes.TIMESTAMP,
    endTime: DataTypes.TIMESTAMP
  }, {});
  Banner.associate = function(models) {
    // associations can be defined here
  };
  return Banner;
};