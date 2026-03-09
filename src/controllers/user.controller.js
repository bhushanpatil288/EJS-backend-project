const userModel = require("../models/user.model");

const createUser = async (req, res)=>{
  let { username, email, age } = req.body;
  let user = await userModel.create({
    username, email, age
  })
  user.save()
  res.send(user);
}

module.exports = { createUser }