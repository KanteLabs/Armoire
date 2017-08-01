const express = require('express');
const userRoutes = express.Router();
const usersController = require('../controllers/users_controller');
const authHelpers = require('../services/auth/auth_helpers');

userRoutes.get('/', authHelpers.loginRequired, usersController.index);

module.exports = userRoutes;