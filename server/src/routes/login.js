const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();


router.get('/profile', UserController.getUser);
router.post('/login', UserController.create);
router.post('/register', UserController.create);

module.exports = router;