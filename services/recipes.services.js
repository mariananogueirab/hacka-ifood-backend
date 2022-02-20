/* eslint-disable no-console */
const {
  createRecipeModel,
  getRecipesModel,
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

const getRecipesByTitleService = async (data) => {
  const { email, filter } = data;

  const recipes = await getRecipesService(email);

  const recipesByTitle = recipes.filter(({ title }) => title.match(filter));

  return recipesByTitle;
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
