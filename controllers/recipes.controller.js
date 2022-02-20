/* eslint-disable consistent-return */
/* eslint-disable no-console */
const {
  createRecipeService,
  getRecipesService,
  getRecipesByTitleService,
  createRecipesService,
  getRecipeById,
} = require('../services/recipes.services');

const createRecipeController = async (req, res, next) => {
  try {
    const id = await createRecipeService(req.body);

    return res.status(201).json({ _id: id, ...req.body });
  } catch (error) {
    next(error);
  }
};

const createRecipesController = async (req, res, next) => {
  try {
    await createRecipesService(req.body);

    return res.status(201).json({ message: 'Registered recipes' });
  } catch (error) {
    next(error);
  }
};

const getRecipesController = async (req, res, next) => {
  try {
    const { email } = req.user;
    const recipes = await getRecipesService(email);

    return res.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
};

const getRecipesByTitleController = async (req, res, next) => {
  try {
    const { filter } = req.query;
    const { email } = req.user;
    console.log(filter);
    const recipeTitle = await getRecipesByTitleService({ filter, email });

    return res.status(200).json(recipeTitle);
  } catch (error) {
    next(error);
  }
};

const getRecipe = async (req, res, next) => {
  try {
    const { id } = req.params;
    const recipe = await getRecipeById(id);

    return res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createRecipeController,
  getRecipesController,
  getRecipesByTitleController,
  createRecipesController,
  getRecipe,
};
