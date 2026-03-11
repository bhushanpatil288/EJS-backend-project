const express = require("express");
const router = express.Router();
const { profile } = require("../controllers/user.controller")
const { isLoggedIn } = require("../middlewares/auth.middleware");

router.get("/profile", isLoggedIn, profile)

module.exports = router