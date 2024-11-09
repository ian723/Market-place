const express = require('express');
const { getAllProviders, createProvider } = require('../controllers/providerController');
const router = express.Router();

router.get('/', getAllProviders);
router.post('/', createProvider);

module.exports = router;
