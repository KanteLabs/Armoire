const express = require('express');
const clothesRoutes = express.Router();

const clothesController = require('../controllers/clothes_controller');
const outfitsController = require('../controllers/outfits_controller');
const clothesHelper = require('../services/api/clothes_helper');
const authHelper = require('../services/auth/auth_helpers');

clothesRoutes.get('/', authHelper.loginRequired, clothesController.index);
clothesRoutes.get('/outfits', authHelper.loginRequired, outfitsController.index)

clothesRoutes.get('/outfits/outfits_add', authHelper.loginRequired, outfitsController.newFit)

clothesRoutes.post('/clothes_add', authHelper.loginRequired, clothesController.create)
clothesRoutes.post('/outfits/add', authHelper.loginRequired, outfitsController.create)

clothesRoutes.get('/:id', authHelper.loginRequired, clothesController.show)

clothesRoutes.get('/:id/edit', authHelper.loginRequired, clothesController.edit)

clothesRoutes.put('/:id', authHelper.loginRequired, clothesController.update)

clothesRoutes.delete('/:id', authHelper.loginRequired, clothesController.delete)
module.exports = clothesRoutes;