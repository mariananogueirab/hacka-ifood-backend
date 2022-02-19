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

  // console.log('model', recipes[0].ingredients);

  const { restrictions } = await findUser(email);

  // console.log('rest', restrictions);

  const rest = recipes
    .filter((recipe) => !recipe.ingredients
      .some((ingredient) => restrictions
        .includes(ingredient)));

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
