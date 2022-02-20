const { getUser } = require('../services/login.services');
const { success } = require('../utils/dictionary/statusCode');

const login = async (req, res, next) => {
  try {
    const { token, email } = await getUser(req.body);
    console.log(email)
    return res.status(success).json({ token, email });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};
