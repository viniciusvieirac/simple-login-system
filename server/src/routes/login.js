const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();
const authMiddleware = require('../middleware/auth');


router.get('/profile', authMiddleware, UserController.getUser);
router.post('/login', UserController.login);
router.post('/register', UserController.create);

module.exports = router;