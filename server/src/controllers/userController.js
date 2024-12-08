const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

function generateToken(params = {}) {
  return jwt.sign(params, secret, {
    expiresIn: 86400,
  });
}

module.exports = {

  async getUser(req, res) {
    try {

      const token = req.headers.authorization.split(' ')[1];

      if (!token) {
        return res.status(403).json({ message: 'Token não encontrado' });
      }


      const decoded = jwt.verify(token, secret);


      const userId = decoded.id;


      const user = await User.findOne({
        where: { id: userId },
        attributes: { exclude: ['password'] },
      });

      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }


      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao obter usuário', error: error.message });
    }
  },


  async create(req, res) {
    const { name, password, email } = req.body;
    const user = await User.create({ name, password, email });
    const token = generateToken({ id: user.id });
    return res.status(201).json({
      status: 1,
      message: 'User created successfully',
      user,
      token,
    });
  },

  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).send({
        status: 0,
        message: 'E-mail ou senha incorreto!',
        user: {}
      });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        status: 0,
        message: 'E-mail ou senha incorreto!',
        user: {}
      });
    }

    user.password = undefined;
    const token = generateToken({ id: user.id });

    return res.status(200).json({
      status: 1,
      message: 'User logged in successfully',
      user,
      token,
    });
  },

  async getUserByEmail(email) {
    const user = await User.findOne({ where: { email } });
    return user;
  }
};