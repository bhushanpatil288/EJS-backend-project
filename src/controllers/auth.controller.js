const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hashPassword = async (enteredPass) =>{
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(enteredPass, salt);
}

const genToken = (id)=>{
  return jwt.sign(
    {id},
    process.env.SECRET,
    {expiresIn: process.env.EXP}
  )
}

const registerPage = async (req, res)=>{
  res.render("register")
}

const register = async (req, res)=>{
  let { username, name, email, age, password } = req.body;
  let userExists = await userModel.findOne({username});
  
  // handling some errors
  if(userExists) return res.status(409).json({
    message:"username already exists"
  })

  password = await hashPassword(password);
  
  user = await userModel.create({
    username,
    name,
    email,
    age, 
    password
  })
  
  let token = genToken(user._id);
  res.cookie("token", token);

  res.send("registered")
}

module.exports = { registerPage, register }