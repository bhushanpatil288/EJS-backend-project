const userModel = require("../models/user.model");
const postModel = require("../models/post.model");

const profile = async (req, res)=>{
  let { id } = req.user
  let user = await userModel.findOne({_id: id});
  let userPosts = await postModel.find({user: id});
  res.render("profile", {user: user, posts: userPosts});
  // res.send(user)
}

module.exports = { profile }