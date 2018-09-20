var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var emotionSchema = new Schema({
  tmemberemotion: String,
  teamsemotion: String,
    });
module.exports = mongoose.model('emotioninputs', emotionSchema);
