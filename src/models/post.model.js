const mongoose = require("mongoose");

const postModel = mongoose.Schema({
  content:{
    type: String,
    require: true
  },
  likes:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    }
  ],
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
}, {timestamps: true})

module.exports = mongoose.model("post", postModel);