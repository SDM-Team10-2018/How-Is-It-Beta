//server/server.js
var express = require("express");
var router = require("./routes/routes.js");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../client"));
app.use(express.static(path.join(__dirname, "../client", "build")));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));

//mongoose.connect('mongodb://localhost:27017/HappinessTest');
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/HappinessTest"
);
app.use("/", router);
module.exports = app;

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.ejs"));
});

app.listen();
