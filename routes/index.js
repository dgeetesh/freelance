var express = require('express');
var router = express.Router();
const userModel=require('../modals/userModal');
const User = new userModel();
var jwt = require('jsonwebtoken');
const ensureToken = require('../middleware/middleware.js');
var client = require('../redisServer.js');

// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/logout', function(req, res, next) {
  res.render('login');
});

router.get('/home', function(req, res, next) {
    res.render('home');
  });

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.post('/register', function(req, res, next) {
  var name=req.body.userName;
  var email=req.body.email;
  var pass=req.body.pass;
  var phoneNumber=req.body.phoneNumber;
  User.userName=name;
  User.email=email;
  User.password=pass;
  User.phoneNumber=phoneNumber;
  User.save().then(resp=>{
    console.log('resp',resp);
    res.render('home');
  }).catch(err=>{
    console.log('Error in saving the User',err);
  })  
});


router.post('/login' , function(req, res, next) {
  var email=req.body.email;
  var pass=req.body.pass;
  userModel.findOne({'email':email,'password':pass}).then(resp=>{
    if (!resp || resp.length == 0) throw "Data not Found";
    var token = jwt.sign({ User: resp },'secret');
    // console.log('resp',resp);
  if(token)
  {
    userModel.update({_id:resp._id},{accessToken:token}).then(saveResp=>{   
         console.log('saveresp',saveResp);
        //  res.send({user:resp});
         res.render('home',{user:resp});
        });
    // accessToken
  }
}).catch(err=>{
  console.log(`Error login User ${email}`,err);
  // res.render('error');
})
});

module.exports = router;
