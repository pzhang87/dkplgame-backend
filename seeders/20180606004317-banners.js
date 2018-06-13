'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Banners',
      [
        {
          name: 'TL Soku Base',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'DKPL Special',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
    {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Banner', null, {});
  }
};
