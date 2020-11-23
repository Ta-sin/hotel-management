const express = require('express');
const loginModel = require.main.require('./models/loginModel');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.get('/', (req, res) => {
    res.render('Login');
});

router.post('/', (req, res) => {

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
});

module.exports = router;
