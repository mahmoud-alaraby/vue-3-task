import { defineStore } from "pinia";
import { ref } from "vue";
import router from "../router";

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref(false);
  const user = ref({});

  function login(username: string, password: string): boolean {
    if (username === "admin" && password === "admin") {
      isAuthenticated.value = true;
      user.value = { name: username, role: "admin" };
      localStorage.setItem("auth", JSON.stringify({ isAuthenticated: true }));
      return true;
    }
    return false;
  }

  function logout() {
    isAuthenticated.value = false;
    user.value = {};
    localStorage.removeItem("auth");
    router.push("/login");
  }

  function loadAuth() {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsed = JSON.parse(data);
      isAuthenticated.value = parsed.isAuthenticated || false;
    }
  }

  loadAuth();

  return {
    check: isAuthenticated,
    user,
    login,
    logout,
  };
});
