const router = require('express').Router();

const {
  getRecipesController,
  getRecipesByCategoryController,
  getRecipesByTitleController,
} = require('../controllers/recipes');

router.get('/', getRecipesController);
router.get('/:category', getRecipesByCategoryController);
router.get('/:title', getRecipesByTitleController);

module.exports = router;
