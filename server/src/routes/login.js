const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();


router.get('/', UserController.getAll);
router.post('/', UserController.create);

module.exports = router;