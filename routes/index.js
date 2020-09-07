const express = require('express');
const router = express.Router();
const usersController = require('../controllers/Users');

router.get('/users', usersController.getusers);

module.exports = router;