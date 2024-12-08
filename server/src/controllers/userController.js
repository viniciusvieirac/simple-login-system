const { UserService } = require('../service');

const getAllUsers = async (req, res) => {
  const users = await UserService.getUsers();
  res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await UserService.getByUserId(id);
  res.status(200).json(user);
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await UserService.createUser({ displayName, email, password, image });
  res.status(201).json(user);
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
};