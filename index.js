const app = require("./src/app")
require("dotenv").config();
const connectDB = require("./src/db/connectdb")



connectDB().then(()=>{
  console.log("connected to database");
  app.listen(8080, ()=>{
    console.log("listening on http://127.0.0.1:8080");
  })
}).catch((e)=>{
  console.log("error occured")
  console.log(e.message);
})