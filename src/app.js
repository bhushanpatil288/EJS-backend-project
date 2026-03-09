const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// routes
const healthCheck = require("./healthcheck/index");
const userRouter = require("./routes/user.route");
const postRouter = require("./routes/post.route")

app.use("/health", healthCheck);
app.use("/users", userRouter);
app.use("/posts", postRouter)



module.exports = app;