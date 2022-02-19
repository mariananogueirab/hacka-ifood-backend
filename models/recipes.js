/* eslint-disable no-console */
const connection = require('./connection');

const getRecipesModel = async () => {
  const connect = await connection();

  const recipes = await connect
    .collection('recipes')
    .find()
    .toArray();

  console.log('model', recipes);
  return recipes;
};

const getRecipesByCategoryModel = async (cuisine) => {
  const connect = await connection();

  const recipeCategory = await connect
    .collection('recipes')
    .findAll({ cuisine });

  console.log('model', recipeCategory);
  return recipeCategory;
};

const getRecipesByTitleModel = async (title) => {
  const connect = await connection();

  const recipeTitle = await connect
    .collection('recipes')
    .findAll({ title });

  console.log('model', recipeTitle);
  return recipeTitle;
};

module.exports = {
  getRecipesModel,
  getRecipesByCategoryModel,
  getRecipesByTitleModel,
};
