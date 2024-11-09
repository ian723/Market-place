module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Providers', [
      {
        name: 'Provider 1',
        location: 'Location 1',
        rating: 4.5,
        latitude: 37.7749,
        longitude: -122.4194,
        distance: 5.0,  // Ensure distance is included
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Provider 2',
        location: 'Location 2',
        rating: 3.8,
        latitude: 40.7128,
        longitude: -74.0060,
        distance: 7.0,  // Ensure distance is included
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Providers', null, {});
  },
};
