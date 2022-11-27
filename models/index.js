const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./User.js")(sequelize, Sequelize);

db.book = require("./Book.js")(sequelize, Sequelize);
db.role = require("./Role")(sequelize, Sequelize);
db.rental = require("./rental")(sequelize, Sequelize);

db.user.belongsToOne(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});

db.user.belongsToOne(db.rental, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "rentalId",
});

db.rental.belongsToOne(db.user, {
  through: "user_rentals",
  foreignKey: "rentalId",
  otherKey: "userId",
});

db.role = ["user", "admin"];

module.exports = db;
