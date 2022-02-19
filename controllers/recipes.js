/* eslint-disable consistent-return */
/* eslint-disable no-console */
const {
  createRecipeService,
  getRecipesService,
  getRecipesByCategoryService,
  getRecipesByTitleService,
} = require('../services/recipes');

const createRecipeController = async (req, res, next) => {
  try {
    const { cuisine, ingredients } = req.body;

    const newRecipe = await createRecipeService(cuisine, ingredients);

    console.log('controller', newRecipe);
    return res.status(201).json({ newRecipe });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getRecipesController = async (req, res, next) => {
  try {
    const { email } = req.params;
    console.log(email);
    const recipes = await getRecipesService(email);

    console.log('controller', recipes);
    return res.status(200).json(recipes);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getRecipesByCategoryController = async (req, res, next) => {
  try {
    const { cuisine } = req.body;
    const recipeCategory = await getRecipesByCategoryService(cuisine);

    console.log('controller', recipeCategory);
    return res.json(200).json(recipeCategory);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getRecipesByTitleController = async (req, res, next) => {
  try {
    const { variavelFront } = req.body;
    const recipeTitle = await getRecipesByTitleService(variavelFront);

    console.log('controller', recipeTitle);
    return res.status(200).json(recipeTitle);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createRecipeController,
  getRecipesController,
  getRecipesByCategoryController,
  getRecipesByTitleController,
};
