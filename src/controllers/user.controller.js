const userModel = require("../models/user.model");


const profile = async (req, res)=>{
  let { id } = req.user
  let user = await userModel.findOne({_id: id});
  res.send(user)
}

module.exports = { profile }