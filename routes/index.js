var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   console.log(req.session.passport.user);
//   res.render('index', { title: 'Express', user: req.session.passport.user });
// });
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
