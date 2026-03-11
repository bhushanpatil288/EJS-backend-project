const express = require("express");
const router = express.Router();
const { registerPage, register, loginPage, login, logout } = require("../controllers/auth.controller")
const { isLoggedIn } = require("../middlewares/auth.middleware")

router.get("/register", registerPage)
router.post("/register", register)
router.get("/login", loginPage)
router.post("/login", login)
router.get("/logout", isLoggedIn, logout)

module.exports = router;