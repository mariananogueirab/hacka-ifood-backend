/* eslint-disable no-console */
const connection = require('./connection');
const { findUser } = require('./user.model');

const createRecipeModel = async (cuisine, ingredients) => {
  const connect = await connection();

  const { insertedId } = await connect
    .collection('recipes')
    .insertOne({ cuisine, ingredients });

  return insertedId;
};

const getRecipesModel = async (email) => {
  const connect = await connection();

  const recipes = await connect
    .collection('recipes')
    .find()
    .toArray();

  const { restrictions } = await findUser(email);

  const rest = recipes.map((recipe) => recipe
    .ingredients.filter((ingredient) => !restrictions.includes(ingredient)));

  console.log('model', rest);
  return rest;
};

const getRecipesByCategoryModel = async (cuisine) => {
  const connect = await connection();

  const recipeCategory = await connect
    .collection('recipes')
    .findAll({ cuisine });

  console.log('model', recipeCategory);
  return recipeCategory;
};

const getRecipesByTitleModel = async (variavelFront) => {
  const connect = await connection();

  const recipeTitle = await connect
    .collection('recipes')
    .find({ title: { $regex: `/${variavelFront}/i` } });

  console.log('model', recipeTitle);
  return recipeTitle;
};

module.exports = {
  createRecipeModel,
  getRecipesModel,
  getRecipesByCategoryModel,
  getRecipesByTitleModel,
};
