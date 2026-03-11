const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

// ejs setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

// common middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// routes
const healthCheck = require("./healthcheck/health");
const userRouter = require("./routes/user.route");
const postRouter = require("./routes/post.route");
const authRouter = require("./routes/auth.route");

app.use("/", healthCheck);
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/auth", authRouter);


module.exports = app;