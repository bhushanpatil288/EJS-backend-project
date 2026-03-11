const jwt = require("jsonwebtoken");

const isLoggedIn = (req, res, next) =>{
  if(req.cookies.token){
    let data = jwt.verify(req.cookies.token, process.env.SECRET)
    req.user = data;
    next();
  } else {
    res.send("You first need to be logged in");
  }
}

module.exports = { isLoggedIn }