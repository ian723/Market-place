module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Providers', 'latitude', {
      type: Sequelize.FLOAT,
      allowNull: true,
    });
    await queryInterface.addColumn('Providers', 'longitude', {
      type: Sequelize.FLOAT,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Providers', 'latitude');
    await queryInterface.removeColumn('Providers', 'longitude');
  },
};
