require("dotenv").config();
const app = require("./src/app")
const connectDB = require("./src/db/connectdb")


const PORT = process.env.PORT || 7070;
const HOST = process.env.HOST || "http://127.0.0.1";


(async ()=>{
  try{
    await connectDB();
    console.log("connected to database");
    app.listen(PORT, ()=>{
      console.log(`listening on ${HOST}:${PORT}`);
    });
  } catch(e){
    console.log("startup error", e);
  }
})()