module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    review_text: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
  });

  Review.associate = (models) => {
    Review.belongsTo(models.User, { foreignKey: 'userId' });
    Review.belongsTo(models.Provider, { foreignKey: 'providerId' });
  };

  return Review;
};
