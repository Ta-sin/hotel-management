const express = require('express');
const loginModel = require.main.require('./models/loginModel');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.get('/', (req, res) => {
    res.render('Login');
});

router.post('/',[
  check('email','Invalid Email').exists().isLength({min: 5}),
  check('password','Invalid password').exists().isLength({min:3})
], (req, res) => {

    var errors = validationResult(req);
    if(!errors.isEmpty())
    {
      console.log(errors);
      res.redirect(req.get('referer'));
    }else{
      var user = {
          email: req.body.email,
          password: req.body.password
      };


  loginModel.validate(user, function (status) {
          if (status) {console.log(user.email);
              console.log(user.password);
              req.session.email = user.email;
              req.session.uid = status[0].id;
              //res.redirect('/home');
              res.redirect('/dashboard');
          } else {
              res.render('Login');
          }
      });
    }

});

module.exports = router;
