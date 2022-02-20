/* eslint-disable no-console */
const {
  createRecipeModel,
  getRecipesModel,
  getRecipesByTitleModel,
  createRecipesModel,
  findRecipeById,
} = require('../models/recipes.model');

const createRecipeService = async (recipe) => {
  const recipeId = await createRecipeModel(recipe);

  return recipeId;
};

const createRecipesService = async (recipes) => {
  await createRecipesModel(recipes);
};

const getRecipesService = async (email) => {
  const recipes = await getRecipesModel(email);

  return recipes;
};

const getRecipesByTitleService = async (variavelFront) => {
  const recipeTitle = await getRecipesByTitleModel(variavelFront);

  return recipeTitle;
};

const getRecipeById = async (id) => {
  const recipe = findRecipeById(id);
  return recipe;
};

module.exports = {
  createRecipeService,
  getRecipesService,
  getRecipesByTitleService,
  createRecipesService,
  getRecipeById,
};
