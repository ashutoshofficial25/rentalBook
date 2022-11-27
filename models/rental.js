module.exports = (sequelize, Sequelize) => {
  const DataTypes = Sequelize.DataTypes;
  const rental = sequelize.define("rental", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rent: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return rental;
};
