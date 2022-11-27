const db = require("../models");
const User = db.user;

const validateDuplicate = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    res.status(404).json({
      message: "please enter a mail",
    });
  }
  const foundUser = await User.findOne({
    where: {
      email: email,
    },
  });
  if (foundUser) {
    res.status(404).json({
      message: "user already exixt with this email",
    });
  }

  next();
};

module.exports = validateDuplicate;
