
Claro! Aqui está uma versão mais enxuta e focada para um README.md no GitHub:

Sistema de Login Simples

Aplicação de login simples com Vue.js no front-end e Node.js/Express no back-end, utilizando JWT para autenticação.

Tecnologias Utilizadas

Front-end: Vue.js, Vue Router, Axios
Back-end: Node.js, Express, Sequelize, JWT, bcryptjs
Banco de Dados: MySQL
Funcionalidades

Cadastro de usuário (com nome, e-mail e senha)
Login de usuário (gera token JWT para autenticação)
Visualização de perfil (somente usuários autenticados)
Proteção de rotas com JWT

Instalação

1. Clonando o repositório
bash
Copiar código
git clone https://github.com/seu-usuario/simple-login-system.git
cd simple-login-system

2. Front-end (Vue.js)
Acesse a pasta do cliente:

cd client

Instale as dependências:
bash
Copiar código
npm install
Execute a aplicação:


npm run dev

A aplicação estará disponível em http://localhost:5173.

3. Back-end (Node.js)
Acesse a pasta do servidor:

Instale as dependências:

npm install
Configure seu banco de dados (MySQL) no arquivo /server/config/config.js.

Execute a aplicação:
npm start
A API estará disponível em http://localhost:8888.

4. Banco de Dados
Configure e execute as migrações:

npx sequelize-cli db:migrate
Endpoints da API
POST /api/register: Cria um novo usuário.
POST /api/login: Realiza login e retorna um token JWT.
GET /api/profile: Retorna dados do usuário autenticado (requisição com token JWT no cabeçalho Authorization).
Fluxo
Página de Login: Se não houver token no localStorage, o usuário será redirecionado para /login.
Página de Registro: O usuário pode se cadastrar.
Perfil: Após o login, o usuário é redirecionado para /profile, onde pode ver suas informações.
