/* eslint-disable no-console */
const { ObjectId } = require('mongodb');
const connection = require('./connection');
const { findUser } = require('./user.model');

const DB_COLLECTION = 'Recipes';

const createRecipeModel = async (recipe) => {
  const connect = await connection();

  const { insertedId } = await connect
    .collection(DB_COLLECTION)
    .insertOne(recipe);

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

  const user = await findUser(email);

  if (user.restrictions === null) return recipes;

  const restrictionRecipes = recipes
    .filter((recipe) => !recipe.NER
      .some((ingredient) => user.restrictions
        .includes(ingredient)));

  return restrictionRecipes;
};

const findRecipeById = async (id) => {
  const db = await connection();
  const task = await db.collection(DB_COLLECTION)
    .findOne({ _id: ObjectId(id) });

  return task;
};

module.exports = {
  createRecipeModel,
  getRecipesModel,
  createRecipesModel,
  findRecipeById,
};
