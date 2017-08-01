const express = require('express');
const clothesRoutes = express.Router();

const clothesController = require('../controllers/clothes_controller');
const clothesHelper = require('../services/api/clothes_helper');

clothesRoutes.get('/', clothesController.index);

clothesRoutes.get('/', clothesHelper.productSearchAPI, clothesController.sendSearch)

module.exports = clothesRoutes;