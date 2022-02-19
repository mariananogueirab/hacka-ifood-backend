/* eslint-disable no-console */
const Joi = require('joi');
const bcrypt = require('bcrypt');
const { create, findUser, updateRestrictions } = require('../models/user.model');
const { userAlreadyRegistered } = require('../utils/dictionary/messagesDefault');
const { badRequest, conflict } = require('../utils/dictionary/statusCode');
const errorHandling = require('../utils/functions/errorHandling');
const { generateToken } = require('./authService');

const createUserSchema = Joi.object({
  name: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().min(6).required(),
});

const validateCreateUser = (name, email, password) => {
  const { error } = createUserSchema.validate({
    name, email, password,
  });
  if (error) throw errorHandling(badRequest, error.message);
};

const validateUserAlreadyExists = async (email) => {
  const userFound = await findUser(email);
  if (userFound) throw errorHandling(conflict, userAlreadyRegistered);
};

const userCreate = async (user) => {
  const { name, email, password } = user;
  validateCreateUser(name, email, password);
  const passwordEncript = await bcrypt.hash(password, 10);
  const userEncrypt = { name, email, password: passwordEncript };

  await validateUserAlreadyExists(email);
  await create(userEncrypt);

  const { password: _password, ...userWithoutPassword } = user;

  console.log(user);

  const token = generateToken(userWithoutPassword);

  return token;
};

const restricUpdate = async (data) => {
  const newUser = await updateRestrictions(data);
  return newUser;
};

module.exports = {
  userCreate,
  restricUpdate,
};
