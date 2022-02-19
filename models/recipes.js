/* eslint-disable no-console */
const connection = require('./connection');
const { findUser } = require('./user.model');

const createRecipeModel = async (title, ingredients, directions, link, source, NER) => {
  const connect = await connection();

  const { insertedId } = await connect
    .collection('recipes')
    .insertOne({
      title, ingredients, directions, link, source, NER,
    });

  return insertedId;
};

const getRecipesModel = async (email) => {
  const connect = await connection();

  const recipes = await connect
    .collection('recipes')
    .find()
    .toArray();

  const { restrictions } = await findUser(email);

  const restrictionRecipes = recipes
    .filter((recipe) => !recipe.NER
      .some((ingredient) => restrictions
        .includes(ingredient)));

  return restrictionRecipes;
};

const getRecipesByTitleModel = async (variavelFront) => {
  const connect = await connection();

  const recipeTitle = await connect
    .collection('recipes')
    .find({ title: { $regex: `/${variavelFront}/i` } });

  return recipeTitle;
};

module.exports = {
  createRecipeModel,
  getRecipesModel,
  getRecipesByTitleModel,
};
