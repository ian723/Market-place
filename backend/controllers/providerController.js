const { Provider } = require("../models");

// Haversine Formula to calculate distance between two lat/lon points
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of Earth in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
}

const getAllProviders = async (req, res) => {
  try {
    const { latitude, longitude } = req.query; // Get user's location from query params

    if (!latitude || !longitude) {
      return res
        .status(400)
        .json({ error: "Latitude and longitude are required" });
    }

    // Fetch all providers
    const providers = await Provider.findAll();
    // Calculate distance and filter providers within a 10km radius
    const nearbyProviders = providers
      .map((provider) => {
        const distance = haversine(
          parseFloat(latitude),
          parseFloat(longitude),
          provider.latitude,
          provider.longitude
        );
        provider.dataValues.distance = distance; // Add the distance to the provider object
        return provider;
      })
      .filter((provider) => provider.dataValues.distance <= 10); // Only show providers within 10 km

    res.json(nearbyProviders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to retrieve providers" });
  }
};

const createProvider = async (req, res) => {
  try {
    const { name, location, rating, distance, latitude, longitude } = req.body;
    const provider = await Provider.create({
      name,
      location,
      rating,
      distance,
      latitude,
      longitude,
    });
    res.status(201).json(provider);
  } catch (error) {
    res.status(400).json({ error: "Unable to create provider" });
  }
};

module.exports = { getAllProviders, createProvider };
