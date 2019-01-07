var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'TrackerApp' });
});

// This is where im adding the 
// routes for the other Pages. 
/* GET ADD USER page. */
router.get('/adduser', function(req, res, next) {
  res.render('adduser', { title: 'ADD USER' });
});

/* GET USERList page. */
router.get('/userlist', function(req, res, next) {
  res.render('users', { title: 'ADD USER' });
});

/* GET development OPs page. */
router.get('/devops', function(req, res, next) {
  res.render('devops', { title: 'Devvy Oppy ' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Aboutty ' });
});




module.exports = router;
