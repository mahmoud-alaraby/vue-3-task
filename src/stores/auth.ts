import { defineStore } from "pinia";
import { ref } from "vue";
import router from "../router";

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref(false);
  const user = ref({});

  // This function is used to login the user and set new session
  function login(username: string, password: string): boolean {
    if (username === "admin" && password === "admin") {
      isAuthenticated.value = true;
      user.value = { name: username, role: "admin" };
      // Store the authentication status in localStorage
      localStorage.setItem("isAuthenticated", "true");
      return true;
    }
    return false;
  }

  // This function is used to logout and clear user session
  function logout() {
    isAuthenticated.value = false;
    user.value = "";
    router.push('/login');
  }

  return {
    check: isAuthenticated,
    user,
    login,
    logout,
  };
});
