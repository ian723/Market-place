<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="p-8 bg-white shadow-md rounded-lg max-w-md w-full">
        <h2 class="text-2xl font-bold mb-4 text-center text-gray-700">
          Register
        </h2>
        <form @submit.prevent="register" class="space-y-4">
          <input
            v-model="name"
            type="text"
            placeholder="Name"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
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
            Register
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
        name: "",
        email: "",
        password: "",
      };
    },
    methods: {
      async register() {
        try {
          await api.post("/users/register", {
            name: this.name,
            email: this.email,
            password: this.password,
          });
          alert("Registration successful");
          this.$router.push("/login");
        } catch (error) {
          console.error(error);
          alert("Registration failed");
        }
      },
    },
  };
  </script>
  