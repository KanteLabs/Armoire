const express = require('express');
const clothesRouter = express.Router();

const clothesController = require('../controllers/clothes_controller');
const clothesHelper = require('../services/api/clothes_helper');

clothesRouter.get('/', clothesController.index);

clothesRouter.get('/:search', clothesHelper.productSearchAPI, clothesController.sendSearch)

module.exports = clothesRouter;