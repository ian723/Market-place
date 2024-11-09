const express = require('express');
const { getProviderReviews, createReview } = require('../controllers/reviewController');
const router = express.Router();

router.get('/:providerId', getProviderReviews);
router.post('/', createReview);

module.exports = router;
