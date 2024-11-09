const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5174' })); // Adjust the origin as needed
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const providerRoutes = require('./routes/providerRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

app.use('/api/users', userRoutes);
app.use('/api/providers', providerRoutes);
app.use('/api/reviews', reviewRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
