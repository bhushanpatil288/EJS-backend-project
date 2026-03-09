const postModel = require("../models/post.model");
const userModel = require("../models/user.model");

const  createPost = async (req, res) =>{
  let { postdata, user } = req.body;
  let post = await postModel.create({
    postdata, user
  });

  let postuser = await userModel.findOne({_id: user});
  postuser.posts.push(post._id);

  await post.save();
  await postuser.save();

  res.send({post, postuser});
}

module.exports = { createPost }