const db = require("../models");

const Book = db.book;
const duplicateBook = async (req, res, next) => {
  const { name } = req.body;

  const book = await Book.findOne({
    where: {
      name: name,
    },
  });
  if (book) {
    res.status(404).json({
      message: "cannot add duplicate bool",
    });
  }

  try {
  } catch (error) {
    res.status(404).json({
      error: error,
      message: "sonething went wrong",
    });
  }
};

module.exports = { duplicateBook };
