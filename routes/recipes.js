const router = require('express').Router();

const { getRecipesController } = require('../controllers/recipes');

router.get('/', getRecipesController);

module.exports = router;
