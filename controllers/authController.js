const User = require("../models/").user;

const signup = (req, res, next) => {
  const { name, email, password } = req.body;
};

const loginUser = (req, res, next) => {
  const { email, password } = req.body;
};

module.exports = {
  loginUser,
  signup,
};
