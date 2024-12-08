const User = require('../models/User');

module.exports = {
  async getAll(req, res) {
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
  }
};