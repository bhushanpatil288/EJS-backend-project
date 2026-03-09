const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  username:{
    type: String, 
    require: true
  },
  name:{
    type: String,
    require: true
  },
  email:{
    type: String, 
    require: true,
    unique: true
  },
  age:{
    type: Number
  },
  password:{
    type: String,
    require: true
  },
  posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }]
}, {timestamps: true});

module.exports = mongoose.model("user", userModel);