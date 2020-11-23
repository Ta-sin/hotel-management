const express = require('express');
const roomModel = require.main.require('./models/roomModel');
const router = express.Router();


var msg = "";


router.get('/', (req, res) => {
    res.render('room');
});


router.post('/', (req, res) => {
    var admin = {
        rid: "",
        rname: req.body.rname,
        rprice: req.body.rprice,
        rdescrription: req.body.rdescription,
        rdp: "",
    };

  roomModel.insert(admin, function(status) {
        if (status) {
            res.redirect('/dashboard');
        } else {
            res.render('room');
        }

    });
});

module.exports = router;
