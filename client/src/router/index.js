import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RegisterView from '../views/RegisterView.vue';
import ProfileView from '../views/ProfileView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('jwt_token');
        if (token) {
          next('/profile');
        } else {
          next();
        }
      },
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileView,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('jwt_token');
        if (!token) {
          next('/');
        } else {
          next();
        }
      },
    },
  ],
});

export default router;
