const express = require("express");
const authRouter = require("./auth..routes");
const bookRouter = require("./book.routes");
const router = express.Router();

router.use("/auth", authRouter);
router.use("/book", bookRouter);
module.exports = router;
