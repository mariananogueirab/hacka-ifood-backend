const router = require('express').Router();

const {
  createRecipeController,
  getRecipesController,
  getRecipesByTitleController,
} = require('../controllers/recipes');

router.post('/', createRecipeController);
router.get('/:email', getRecipesController);
router.get('/:title', getRecipesByTitleController);

module.exports = router;
