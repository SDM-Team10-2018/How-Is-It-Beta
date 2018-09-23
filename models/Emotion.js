//models/Emotion.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var emotionSchema = new Schema({
  description: String,
  teamNumber: Number
 });
module.exports = mongoose.model('happy', emotionSchema, 'emotions');