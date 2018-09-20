var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Emotioninputs = require('../../models/emotioninputs');

router.get('/', function(req, res){
  res.render('index')
});

router.route('/insert')
.post(function(req,res) {
 var emotions = new Emotioninputs() ;
  emotions.rad = req.body.rads;
  emotions.good = req.body.goods;
  emotions.meh = req.body.mehs;
  emotions.bad = req.body.bads;
  emotions.awful=req.body.awfuls;
emotions.save(function(err) {
      if (err)
        res.send(err);
      res.send('Thank you for you time!');
  });
})

module.exports = router;
