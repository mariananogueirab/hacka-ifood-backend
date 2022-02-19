/* eslint-disable consistent-return */
const { userCreate, restricUpdate } = require('../services/user.services');
const { created, success } = require('../utils/dictionary/statusCode');

const createUser = async (req, res, next) => {
  try {
    const user = req.body;
    const token = await userCreate(user);

    return res.status(created).json({ token });
  } catch (error) {
    next(error);
  }
};

const restrictionsUpdate = async (req, res, next) => {
  try {
    const restrictions = req.body;
    const { id } = req.params;
    const token = await restricUpdate({ id, restrictions });

    return res.status(success).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  restrictionsUpdate,
};
