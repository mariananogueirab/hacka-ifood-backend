/* eslint-disable no-console */
const { getRecipesModel } = require('../models/recipes');

const getRecipesService = async () => {
  const recipes = await getRecipesModel();

  console.log('service', recipes);
  return recipes;
};

module.exports = {
  getRecipesService,
};
