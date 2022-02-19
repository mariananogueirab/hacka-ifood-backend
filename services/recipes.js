/* eslint-disable no-console */
const {
  getRecipesModel,
  getRecipesByCategoryModel,
  getRecipesByTitleModel,
} = require('../models/recipes');

const getRecipesService = async () => {
  const recipes = await getRecipesModel();

  console.log('service', recipes);
  return recipes;
};

const getRecipesByCategoryService = async (cuisine) => {
  const recipeCategory = await getRecipesByCategoryModel(cuisine);

  console.log('service', recipeCategory);
  return recipeCategory;
};

const getRecipesByTitleService = async (variavelFront) => {
  const recipeTitle = await getRecipesByTitleModel(variavelFront);

  console.log('service', recipeTitle);
  return recipeTitle;
};

module.exports = {
  getRecipesService,
  getRecipesByCategoryService,
  getRecipesByTitleService,
};
