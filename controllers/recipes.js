/* eslint-disable consistent-return */
/* eslint-disable no-console */
const { getRecipesService } = require('../services/recipes');

const getRecipesController = async (_req, res, next) => {
  try {
    const recipes = await getRecipesService();

    console.log('controller', recipes);
    return res.status(200).json(recipes);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { getRecipesController };
