const jwt = require("jsonwebtoken");

const isLoggedIn = (req, res, next) =>{
  if(req.cookies.token){
    let data = jwt.verify(req.cookies.token, process.env.SECRET)
    req.user = data;
    next();
  } else {
    res.redirect("/auth/login")
  }
}

module.exports = { isLoggedIn }