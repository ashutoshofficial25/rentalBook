const db = require("../models");
const User = db.user;

const restrictToUser = async (req, res, next) => {
  const userId = req.user.id; //we get from this requested user token

  const foundUser = await User.findOne({
    id: userId,
  });
  if (!foundUser) {
    res.status(401).json({
      message: "user_not_found",
    });
  }

  foundUser.roleId.role = "admin";
};
