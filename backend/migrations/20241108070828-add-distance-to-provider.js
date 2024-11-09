module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [results] = await queryInterface.sequelize.query(
      `SHOW COLUMNS FROM Providers LIKE 'distance'`
    );
    if (results.length === 0) {
      await queryInterface.addColumn('Providers', 'distance', {
        type: Sequelize.FLOAT,
        allowNull: true,
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Providers', 'distance');
  },
};
