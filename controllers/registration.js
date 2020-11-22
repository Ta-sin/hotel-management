const express = require('express');
const registrationModel = require.main.require('./models/registrationModel');
const router = express.Router();

var msg = "";

router.get('/', (req, res) => {
    res.render('registration');
})

router.post('/', (req, res) => {
    var admin = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        type: "Admin",
        dp: "",
        status: "Inactive",


    };
    registrationModel.insert(admin, function(status) {
        if (status) {
            res.redirect('/login');
        } else {
            res.render('registration');
        }

    });
})

module.exports = router;
