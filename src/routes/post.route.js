const express = require("express");
const router = express.Router();
const { createPost, showAllPosts } = require("../controllers/post.controller")

router.get("/", showAllPosts);
router.post("/create", createPost);

module.exports = router