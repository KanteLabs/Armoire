const express = require('express');
const clothesRoutes = express.Router();

const clothesController = require('../controllers/clothes_controller');
const clothesHelper = require('../services/api/clothes_helper');

clothesRoutes.get('/', clothesController.index);
// clothesRoutes.get('/', clothesHelper.productSearchAPI, clothesController.sendSearch)

clothesRoutes.post('/clothes_add', clothesController.create)

module.exports = clothesRoutes;