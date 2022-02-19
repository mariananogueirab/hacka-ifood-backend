const router = require('express').Router();

const {
  createRecipeController,
  getRecipesController,
  getRecipesByTitleController,
  createRecipesController,
} = require('../controllers/recipes.controller');

router.post('/', createRecipeController);
router.post('/insert-many', createRecipesController);
router.get('/:email', getRecipesController);
router.get('/:title', getRecipesByTitleController);

module.exports = router;
