const router = require('express').Router();
const auth = require('../middlewares/auth');

const {
  createRecipeController,
  getRecipesController,
  getRecipesByTitleController,
  createRecipesController,
  getRecipe,
} = require('../controllers/recipes.controller');

router.post('/', createRecipeController);
router.post('/insert-many', createRecipesController);
router.get('/all', auth, getRecipesController);
router.get('/:id', auth, getRecipe);
router.get('/', auth, getRecipesByTitleController);

module.exports = router;
