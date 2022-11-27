module.exports = (sequelize, Sequelize) => {
  const DataTypes = Sequelize.DataTypes;
  const Book = sequelize.define("Book", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      notNull: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    PublishedOn: {
      type: DataTypes.DATE,
    },
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: Date.now,
    },
  });
  return Book;
};
