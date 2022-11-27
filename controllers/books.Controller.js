const db = require("../models");

const Book = db.book;
const User = db.user;

const getAllBooksList = async (req, res) => {
  try {
    const books = await Book.findAll();
    if (!books) {
      res.status(200).json({
        message: "not found",
      });
    }

    res.status(200).json({
      message: "Success",
      data: books,
    });
  } catch (error) {
    res.status(404).json({
      error: error,
      message: "sonething went wrong",
    });
  }
};

const addNewBook = async (req, res) => {
  const { name, author, publishedOn } = req.body;

  try {
    const newBook = await Book.create({
      name: name,
      author: author,
      PublishedOn: publishedOn,
    });
    res.status(201).json({
      message: "new book added",
      data: newBook,
    });
  } catch (error) {
    res.status(404).json({
      error: error,
      message: "sonething went wrong",
    });
  }
};

const checkDeleteRentRerurn = async (req, res) => {
  const { name } = req.body;

  try {
    if (req.query.delete) {
      const deleteBook = await Book.destroy({
        where: {
          name: name,
        },
      });
      res.status(200).json({
        message: "deleted",
      });
    } else if (req.query.rent) {
      const book = await Book.findOne({
        where: {
          name: name,
        },
      });
      if (!book) {
        res.status(404).json({
          message: "Book is not availabe for rent",
        });
      }

      const rentBook = []; //rent book to user
    } else if (req.query.return) {
      const book = await Book.findOne({
        where: {
          name: name,
        },
      });

      //retrun book
    }
  } catch (error) {
    res.status(404).json({
      error: error,
      message: "sonething went wrong",
    });
  }
};

const bookRentedByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const rentedBooks = await Book.findAll({
      where: {
        userId: userId,
      },
    });

    res.status(201).josn({
      message: "success",
      data: rentedBooks,
    });
  } catch (error) {
    res.status(404).json({
      error: error,
      message: "sonething went wrong",
    });
  }
};

module.exports = {
  getAllBooksList,
  addNewBook,
  checkDeleteRentRerurn,
  bookRentedByUser,
};
