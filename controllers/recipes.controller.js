/* eslint-disable consistent-return */
/* eslint-disable no-console */
const {
  createRecipeService,
  getRecipesService,
  getRecipesByTitleService,
  createRecipesService,
} = require('../services/recipes.services');

const createRecipeController = async (req, res, next) => {
  try {
    const {
      title, ingredients, directions, link, source, NER,
    } = req.body;

    const newRecipe = await createRecipeService(title, ingredients, directions, link, source, NER);

    return res.status(201).json(newRecipe);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const createRecipesController = async (req, res, next) => {
  try {
    await createRecipesService(req.body);

    return res.status(201).json({ message: 'Registered recipes' });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getRecipesController = async (req, res, next) => {
  try {
    const { email } = req.params;
    console.log(email);
    const recipes = await getRecipesService(email);

    return res.status(200).json(recipes);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getRecipesByTitleController = async (req, res, next) => {
  try {
    const { variavelFront } = req.body;
    const recipeTitle = await getRecipesByTitleService(variavelFront);

    return res.status(200).json(recipeTitle);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createRecipeController,
  getRecipesController,
  getRecipesByTitleController,
  createRecipesController,
};
