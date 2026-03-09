const userModel = require("../models/user.model");

const createUser = async (req, res)=>{
  let { username, name, email, age, password } = req.body;
  let user = await userModel.create({
    username, name, email, age, password 
  })
  user.save()
  res.send(user);
}

module.exports = { createUser }