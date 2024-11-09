import { createRouter, createWebHistory } from "vue-router";
import { HomeView, LoginView, RegisterView } from "../views";

const routes = [
  { path: "/providers", name: "Providers", component: HomeView },
  { path: "/register", name: "Register", component: RegisterView },
  { path: "/login", name: "Login", component: LoginView },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
