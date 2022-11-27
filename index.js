const express = require("express");
const app = express();
const dotenv = require("dotenv");
const session = require("express-session");
dotenv.config();
const dbConnection = require("./config/db.config");
const passport = require("passport");
const { loginCheck } = require("./auth/passport");
const Routes = require("./routes/index");
loginCheck(passport);

//BodyParsing
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "oneboy",
    saveUninitialized: true,
    resave: true,
  })
);

let init = async () => {
  await dbConnection.sync({ force: true });
  insertRoles();
};
app.use(passport.initialize());
app.use(passport.session());
//Routes
app.use("/", Routes);

let insertRoles = async () => {
  await Role.bulkCreate([
    {
      id: 1,
      name: "user",
    },
    {
      id: 2,
      name: "admin",
    },
  ]);
  console.log("roles added");
};
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server has started at port " + PORT);
  init();
});
