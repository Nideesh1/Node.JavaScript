var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function (req, res)  {
  res.send('<h1>Welcome</h1>')
  });
router.get('/about', function (req, res)  {
  res.send('About Us Page')
  });

router.get('/save', function(req, res) {
                 res.json({username:req.query.username,password:req.query.password});
        });
router.get('/home', function(req, res) {
                res.set('Content-Type', 'text/plain');
                res.send('Welcome');
        });
router.get('/register', function(req, res) {
                console.log('request for file');
                console.log(__dirname);
                 res.sendFile('/login.html', {root: "."});
       });
router.get('/about', function(req, res) {
                console.log('Request for about us page');
                res.send('About Us page');
      });

module.exports = router;