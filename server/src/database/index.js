const Sequelize = require('sequelize');
const dbConfig = require('../config/config');

const connection = new Sequelize(dbConfig);

try {
  connection.authenticate();
  console.log('Conexao feita');
} catch (error) {
  console.log('erro', error)
};

module.exports = connection;