import { reactive } from 'vue';

export const authStore = reactive({
  user: null,
  token: localStorage.getItem('jwt_token') || null,

  login(user, token) {
    this.user = user;
    this.token = token;
    localStorage.setItem('jwt_token', token);
  },

  logout() {
    this.user = null;
    this.token = null;
    localStorage.removeItem('jwt_token');
  },

  isAuthenticated() {
    return this.token !== null;
  }
});
