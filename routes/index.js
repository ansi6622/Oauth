var express = require('express');
var router = express.Router();
var unirest = require('unirest');

router.get('/', function(req, res, next) {

    console.log(req.isAuthenticated());
    console.log(req.session.passport.user.token);
    unirest.get('https://api.linkedin.com/v1/people/~:(id,num-connections,picture-url)')
      .header('Authorization', 'Bearer ' + req.session.passport.user.token)
      .header('x-li-format', 'json')
      .end(function (response) {

        res.render('index', { profile: response.body, title: 'LinkedIN O-Auths' });
        console.log(req.isAuthenticated());

      })

});
/* GET home page. */
// router.get('/', function(req, res, next) {
//   console.log(req.session.passport.user);
//   res.render('index', { title: 'Express', user: req.session.passport.user });
// });
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'LinkedIN O-Auth' });
// });
// router.get('/logout', function(req, res) {
//     res.clearCookie('userID');
//     res.clearCookie('userAdmin');
//     res.end(req.session.user + ' -Users')
//     req.flash('info', 'Goodbye!');
//     res.redirect('/');
// });
module.exports = router;
