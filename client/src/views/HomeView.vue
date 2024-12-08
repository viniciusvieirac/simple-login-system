<template>
  <div class="login-container">
    <div class="form-wrapper">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input
          type="email"
          v-model="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          v-model="password"
          placeholder="Senha"
          required
        />
        <button type="submit" class="btn">Entrar</button>
        
        <router-link to="/register">
          <button type="button" class="btn btn-register">Fazer Cadastro</button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    async login() {
      const loginData = {
        email: this.email,
        password: this.password,
      };

      try {
        const response = await axios.post('http://localhost:8888/api/login', loginData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        localStorage.setItem('jwt_token', response.data.token);

        console.log('Login bem-sucedido:', response.data);

        this.$router.push('/profile');
      } catch (error) {
        console.error('Erro no login:', error);
        alert('Credenciais inválidas. Tente novamente.');
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
}
.form-wrapper {
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

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
}

input:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}

button {
  width: 100%;
  padding: 12px;
  border: none;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

.btn-register {
  background-color: #2196f3;
  margin-top: 10px;
}

.btn-register:hover {
  background-color: #1e88e5;
}
</style>
