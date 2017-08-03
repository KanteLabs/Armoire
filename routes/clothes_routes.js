const express = require('express');
const clothesRoutes = express.Router();

const clothesController = require('../controllers/clothes_controller');
const clothesHelper = require('../services/api/clothes_helper');
const authHelper = require('../services/auth/auth_helpers');

clothesRoutes.get('/', authHelper.loginRequired, clothesController.index);

clothesRoutes.post('/clothes_add', authHelper.loginRequired, clothesController.create)

clothesRoutes.delete('/:id', authHelper.loginRequired, clothesController.delete)
module.exports = clothesRoutes;