/* eslint-disable consistent-return */
/* eslint-disable no-console */
const {
  getRecipesService,
  getRecipesByCategoryService,
  getRecipesByTitleService,
} = require('../services/recipes');

const getRecipesController = async (_req, res, next) => {
  try {
    const recipes = await getRecipesService();

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
  getRecipesController,
  getRecipesByCategoryController,
  getRecipesByTitleController,
};
