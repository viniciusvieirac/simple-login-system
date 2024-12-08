<template>
  <div class="profile-container" v-if="user">
    <div class="profile-wrapper">
      <h2>Perfil</h2>
      <p><strong>Nome:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <button @click="logout" class="btn-logout">Sair</button>
    </div>
  </div>
  <div v-else class="loading">
    Carregando dados do usuário...
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      const token = localStorage.getItem('jwt_token');
      
      if (!token) {
        alert('Você precisa estar logado para acessar esta página!');
        this.$router.push('/');
        return;
      }

      try {
        const response = await axios.get('http://localhost:8888/api/profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        console.log('Dados do usuário:', response.data);
        this.user = response.data.users;
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
        this.$router.push('/login');
      }
    },
    logout() {
      localStorage.removeItem('jwt_token');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
}

.profile-wrapper {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

p {
  font-size: 16px;
  color: #333;
}

.btn-logout {
  background-color: #f44336;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.btn-logout:hover {
  background-color: #e53935;
}

.loading {
  text-align: center;
  color: #333;
  font-size: 18px;
}
</style>
