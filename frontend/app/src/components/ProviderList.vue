<template>
  <div class="providers-container">
    <h2 class="text-2xl font-bold text-center mb-4">
      Available Wi-Fi Providers
    </h2>
    <div v-if="error" class="text-red-500 text-center">{{ error }}</div>
    <div v-if="loading" class="text-center">Loading providers...</div>

    <div v-if="providers.length" class="grid grid-cols-1 gap-4">
      <div
        v-for="provider in providers"
        :key="provider.id"
        class="p-4 bg-white shadow-md rounded-lg"
      >
        <h3 class="text-xl font-semibold">{{ provider.name }}</h3>
        <p>Distance: {{ provider.distance }} km</p>
        <p>Rating: {{ provider.rating }}</p>
        <p>Location: {{ provider.location }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../providers/api/axios";

export default {
  data() {
    return {
      providers: [],
      loading: false,
      error: null,
      userLocation: {
        latitude: null,
        longitude: null,
      },
    };
  },
  mounted() {
    this.getUserLocation();
  },
  methods: {
    async getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            this.userLocation.latitude = position.coords.latitude;
            this.userLocation.longitude = position.coords.longitude;
            await this.fetchProviders();
          },
          (error) => {
            this.error = "Unable to retrieve your location.";
            console.error(error);
          }
        );
      } else {
        this.error = "Geolocation is not supported by this browser.";
      }
    },

    async fetchProviders() {
      if (!this.userLocation.latitude || !this.userLocation.longitude) {
        this.error = "Location not available.";
        return;
      }

      this.loading = true;
      try {
        const response = await api.get("/providers", {
          params: {
            latitude: this.userLocation.latitude,
            longitude: this.userLocation.longitude,
          },
        });
        this.providers = response.data;
      } catch (error) {
        this.error = "Failed to fetch providers.";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
