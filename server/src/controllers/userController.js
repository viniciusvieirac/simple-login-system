const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
  async getUser(req, res) {
    const users = await User.findAll();
    if (users === '' || users === null) {
      return res.status(404).json({ message: 'No user found' });
    }
    return res.status(200).json({ users });
  },

  async create(req, res) {
    const { name, password, email } = req.body;
    const user = await User.create({ name, password, email });
    return res.status(201).json({
      status: 1,
      message: 'User created successfully',
      user,
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

    return res.status(200).json({
      status: 1,
      message: 'User logged in successfully',
      user,
    });
  }
};