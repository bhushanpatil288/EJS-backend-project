const postModel = require("../models/post.model");
const userModel = require("../models/user.model");

const  createPost = async (req, res) =>{
  let { postTitle, postContent, userId } = req.body;

  let post = await postModel.create({
    title: postTitle, content: postContent, user: userId
  });

  let postuser = await userModel.findOne({_id: userId});

  postuser.posts.push(post._id);

  await post.save();
  await postuser.save();

  res.redirect("/users/profile");
}

const showAllPosts = async (req, res)=>{
  const posts = await postModel.find({}).populate({
    path: "user",
    select: "-password -age -email"
  });
  res.render("allPosts", {posts})
}

module.exports = { createPost, showAllPosts }