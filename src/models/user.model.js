const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  username:{
    type: String, 
    require: true
  },
  email:{
    type: String, 
    require: true
  },
  age:{
    type: Number
  },
  posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }]
})

module.exports = mongoose.model("user", userModel);