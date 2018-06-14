'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'BannerCards',
      'cardId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cards',
          key: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('BannerCards', 'cardId', {})
      .then(()=> {
        queryInterface.removeColumn('BannerCards', 'bannerId', {})
      })
  }
};
