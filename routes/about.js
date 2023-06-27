var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('about/index', { title: 'Toy Station' });
});

module.exports = router;