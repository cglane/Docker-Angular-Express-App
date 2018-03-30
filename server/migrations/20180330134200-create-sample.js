'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Samples', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      strain: {
        type: Sequelize.STRING
      },
      collected_by: {
        type: Sequelize.STRING
      },
      collection_date: {
        type: Sequelize.STRING
      },
      isolation_source: {
        type: Sequelize.STRING
      },
      isolation_source: {
        type: Sequelize.STRING
      },
      geo_loc_name: {
        type: Sequelize.STRING
      },
      lat_lon: {
        type: Sequelize.STRING
      },
      isolate_name_alias: {
        type: Sequelize.STRING
      },
      organism_name: {
        type: Sequelize.STRING
      },
      bioproject: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Samples');
  }
};