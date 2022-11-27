const express = require("express");
const {
  getAllBooksList,
  addNewBook,
  checkDeleteRentRerurn,
  bookRentedByUser,
} = require("../controllers/books.Controller");
const { duplicateBook } = require("../middleware/bookValidator");
const { restrictToUser } = require("../middleware/roleValidator");

const router = express.Router();

router.get("/list", getAllBooksList);

router.post("/create", duplicateBook, restrictToUser, addNewBook);
router.post("/", restrictToUser, checkDeleteRentRerurn);
router.post("/rented/:userId", restrictToUser, bookRentedByUser);
module.exports = router;
