const express = require('express');
const banquetModel = require.main.require('./models/banquetModel');
const router = express.Router();


var msg = "";


router.get('/', (req, res) => {
    res.render('banquet');
});


router.post('/', (req, res) => {
    var admin = {
        bid: "",
        bname: req.body.bname,
        bprice: req.body.bprice,
        bdescrription: req.body.bdescription,
        bdp: "",
    };

  banquetModel.insert(admin, function(status) {
        if (status) {
            res.redirect('/dashboard');
        } else {
            res.render('banquet');
        }

    });
});

module.exports = router;
