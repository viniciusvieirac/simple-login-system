const { User } = require('../models');

const createUser = ({ name, email, password }) =>
  User.create({ name, email, password });

const getUsers = () => User.findAll();

const getByemail = (email) => User.findOne({ where: { email } });

const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
  createUser,
  getUsers,
  getByemail,
  getByUserId,
};