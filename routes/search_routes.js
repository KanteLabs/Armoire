const express = require('express');
const searchRouter = express.Router();

const searchController = require('../controllers/search_controller');
const clothesHelper = require('../services/api/clothes_helper');

// searchRouter.get('/', searchController.index);

searchRouter.get('/', clothesHelper.productSearchAPI, searchController.sendSearch)

module.exports = searchRouter;