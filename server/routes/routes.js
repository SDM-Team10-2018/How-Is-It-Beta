//server/routes/routes.js
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var Expense = require("../../models/Emotion");

router.get("/", function(req, res) {
  res.render("index");
});

router.route("/insert").post(function(req, res) {
  var expense = new Expense();
  expense.description = req.body.desc;
  expense.amount = req.body.amount;

  expense.save(function(err) {
    if (err) res.send(err);
    res.send("Your individual feeling has been successfully logged!");
  });
});

module.exports = router;
