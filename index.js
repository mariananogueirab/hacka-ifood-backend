/* eslint-disable no-console */
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const recipesRouter = require('./routes/recipes.router');
const errorMiddleware = require('./middlewares/errorMidlleware');
const user = require('./routes/user.router');
const login = require('./routes/login.router');

const { PORT } = process.env;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/recipes', recipesRouter);
app.use('/user', user);
app.use('/login', login);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

module.exports = app;
