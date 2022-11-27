const express = require("express");
const {
  getAllBooksList,
  addNewBook,
  checkDeleteRentRerurn,
  bookRentedByUser,
} = require("../controllers/books.Controller");
const { duplicateBook } = require("../middleware/bookValidator");

const router = express.Router();

router.get("/list", getAllBooksList);
router.post("/create", duplicateBook, addNewBook);
router.post("/"), checkDeleteRentRerurn;
router.post("/rented/:userId", bookRentedByUser);
module.exports = router;
