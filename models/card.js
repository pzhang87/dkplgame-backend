'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('card', {
    rarity: {
      type: DataTypes.STRING
    },
    person: {
      type: DataTypes.STRING
    }
  }, {})
  Card.associate = (models) => {
    models.Card.belongsToMany(models.User, {
      as: "UserCards",
      through: "user_cards",
      foreignKey: "cardId",
      otherKey: "UserId"
    })

    models.Card.belongsToMany(models.Banner, {
      through: "banner_cards",
    })
  }
  return Card;
}
