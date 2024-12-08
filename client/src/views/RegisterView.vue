<template>
  <div class="register-container">
    <div class="form-wrapper">
      <h2>Cadastro</h2>
      <div v-if="message" :class="messageClass" class="message">
        {{ message }}
      </div>
      
      <form @submit.prevent="register">
        <input
          type="text"
          v-model="name"
          placeholder="Nome"
          required
        />
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
        <input
          type="password"
          v-model="confirmPassword"
          placeholder="Confirme a Senha"
          required
        />
        <button type="submit" class="btn">Cadastrar</button>
        <router-link to="/">
          <button type="button" class="btn btn-register">Já tem uma conta? Faça login</button>
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
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      message: '',
      messageClass: '',
    };
  },

  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        this.showMessage('As senhas não coincidem!', 'error');
        return;
      }

      const userData = {
        name: this.name,
        email: this.email,
        password: this.password,
      };

      try {
        const response = await axios.post('http://localhost:8888/api/register', userData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        this.showMessage('Conta criada com sucesso! Agora, faça login.', 'success');
        
        setTimeout(() => {
          this.$router.push('/'); 
        }, 3000);
        
      } catch (error) {
        console.error('Erro ao registrar:', error);
        this.showMessage('Houve um erro ao tentar registrar o usuário.', 'error');
      }
    },

    showMessage(message, type) {
      this.message = message;
      this.messageClass = type === 'success' ? 'message-success' : 'message-error';

      setTimeout(() => {
        this.message = '';
        this.messageClass = '';
      }, 5000);
    }
  },
};
</script>

<style scoped>
.register-container {
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

.message {
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  font-weight: bold;
}

.message-success {
  background-color: #4caf50;
  color: white;
}

.message-error {
  background-color: #f44336;
  color: white;
}
</style>
