/* eslint-disable no-console */
const connection = require('./connection');
const { findUser } = require('./user.model');

const DB_COLLECTION = 'Recipes';

const createRecipeModel = async (title, ingredients, directions, link, source, NER) => {
  const connect = await connection();

  const { insertedId } = await connect
    .collection(DB_COLLECTION)
    .insertOne({
      title, ingredients, directions, link, source, NER,
    });

  return insertedId;
};

const createRecipesModel = async (recipes) => {
  const connect = await connection();

  await connect
    .collection(DB_COLLECTION)
    .insertMany(
      recipes,
    );
};

const getRecipesModel = async (email) => {
  const connect = await connection();

  const recipes = await connect
    .collection(DB_COLLECTION)
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
    .collection(DB_COLLECTION)
    .find({ title: { $regex: `/${variavelFront}/i` } });

  return recipeTitle;
};

module.exports = {
  createRecipeModel,
  getRecipesModel,
  getRecipesByTitleModel,
  createRecipesModel,
};
