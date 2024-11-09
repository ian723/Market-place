const { Review, User, Provider } = require('../models');

const getProviderReviews = async (req, res) => {
  try {
    const providerId = req.params.providerId;
    const reviews = await Review.findAll({
      where: { providerId },
      include: [{ model: User, attributes: ['name'] }]
    });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve reviews' });
  }
};

const createReview = async (req, res) => {
  try {
    const { review_text, rating, userId, providerId } = req.body;
    const review = await Review.create({ review_text, rating, userId, providerId });
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create review' });
  }
};

module.exports = { getProviderReviews, createReview };
