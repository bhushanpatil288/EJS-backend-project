const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
  try{
    res.render("health");
    // res.status(200).json({
    //   status: "up",
    //   message: "Backend is working fine",
    //   timestamp: new Date().toISOString()
    // })
  } catch(e){
    res.status(500).json({
      status: "Down",
      error: e.message
    })
  }
})

module.exports = router