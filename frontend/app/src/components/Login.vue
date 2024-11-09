<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="p-8 bg-white shadow-md rounded-lg max-w-md w-full">
        <h2 class="text-2xl font-bold mb-4 text-center text-gray-700">Login</h2>
        <form @submit.prevent="login" class="space-y-4">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            class="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import api from "../providers/api/axios";
  
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      async login() {
        try {
          const response = await api.post("/users/login", {
            email: this.email,
            password: this.password,
          });
          localStorage.setItem("token", response.data.token);
          alert("Login successful");
          this.$router.push("/providers");
        } catch (error) {
          console.error(error);
          alert("Login failed");
        }
      },
    },
  };
  </script>
  