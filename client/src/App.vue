<template>
  <header>
    <div class="wrapper">
      <nav>
        <router-link v-if="!isAuthenticated" to="/"></router-link>
        <router-link v-if="isAuthenticated" to="/profile"></router-link>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script>
import { authStore } from './store/store';

export default {
  computed: {
    isAuthenticated() {
      return authStore.isAuthenticated(); 
    }
  }
};
</script>