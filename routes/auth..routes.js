const express = require("express");

const { signup, loginUser } = require("../controllers/authController");

const router = express.Router();

router.post("/signin", signup);
router.post("/login", loginUser);

module.exports = router;
