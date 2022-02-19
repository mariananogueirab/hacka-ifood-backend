/* eslint-disable no-console */
const {
  createRecipeModel,
  getRecipesModel,
  getRecipesByTitleModel,
} = require('../models/recipes');

const createRecipeService = async (title, ingredients, directions, link, source, NER) => {
  const recipeId = await createRecipeModel(title, ingredients, directions, link, source, NER);

  return {
    _id: recipeId,
    title,
    ingredients,
    directions,
    link,
    source,
    NER,
  };
};

const getRecipesService = async (email) => {
  const recipes = await getRecipesModel(email);

  return recipes;
};

const getRecipesByTitleService = async (variavelFront) => {
  const recipeTitle = await getRecipesByTitleModel(variavelFront);

  return recipeTitle;
};

module.exports = {
  createRecipeService,
  getRecipesService,
  getRecipesByTitleService,
};
