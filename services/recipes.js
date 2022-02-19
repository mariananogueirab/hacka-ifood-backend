/* eslint-disable no-console */
const {
  createRecipeModel,
  getRecipesModel,
  getRecipesByCategoryModel,
  getRecipesByTitleModel,
} = require('../models/recipes');

const createRecipeService = async (cuisine, ingredients) => {
  const recipeId = await createRecipeModel(cuisine, ingredients);

  return {
    _id: recipeId,
    cuisine,
    ingredients,
  };
};

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
  createRecipeService,
  getRecipesService,
  getRecipesByCategoryService,
  getRecipesByTitleService,
};
