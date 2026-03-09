const mongoose = require("mongoose");

const postModel = mongoose.Schema({
  postdata:{
    type: String,
    require: true
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
}, {timestamps: true})

module.exports = mongoose.model("post", postModel);