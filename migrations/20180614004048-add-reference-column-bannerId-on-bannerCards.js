'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'BannerCards',
      'bannerId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Banners',
          key: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('BannerCards', 'bannerId', {})
  }
};
