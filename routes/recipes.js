const router = require('express').Router();

const {
  createRecipeController,
  getRecipesController,
  getRecipesByCategoryController,
  getRecipesByTitleController,
} = require('../controllers/recipes');

router.post('/', createRecipeController);
router.get('/:email', getRecipesController);
router.get('/:cuisine', getRecipesByCategoryController);
router.get('/:title', getRecipesByTitleController);

module.exports = router;
