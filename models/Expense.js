//models/Expense.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var emotionSchema = new Schema({
  description: String,
  amount: Number,
 });
module.exports = mongoose.model('happy', emotionSchema, 'Jonathan');