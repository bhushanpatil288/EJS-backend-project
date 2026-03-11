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

// registration
const registerPage = (req, res)=>{
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

// login 
const loginPage = (req, res)=>[
  res.render("login")
]
const login = async (req, res)=>{
  let { email, password } = req.body;

  // if user is not found
  let user = await userModel.findOne({email});
  if(!user) return res.status(404).json({
    message: "email or password is invalid"
  })

  let isPassValid = await bcrypt.compare(password, user.password);
  if(!isPassValid) return res.status(404).json({
     message: "email or password is invalid"
  })

  let token = genToken(user._id);
  res.cookie("token", token)
  res.send("You are logged in");
}

const logout = (req, res)=>{
  res.cookie("token", "");
  res.redirect("login")
}

module.exports = { registerPage, register, loginPage, login, logout }