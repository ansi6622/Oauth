var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource bubble variant id dendrites');
});
// router.get('/logout', function(req, res) {
//     res.clearCookie('userID');
//     res.clearCookie('userAdmin');
//     req.flash('info', 'Goodbye!');
//     res.end(req.session.user + ' users')
//     res.redirect('/');
// });
module.exports = router;
