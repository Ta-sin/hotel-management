const express = require('express');
const dashboardModel = require.main.require('./models/dashboardModel');
const router = express.Router();

var msg = "";

router.get('/', (req, res) => {
    var room_info = {
        rid: req.session.rid
    };
    dashboardModel.Dashboard(room_info, function(results) {
        //console.log(results);
        res.render('dashboard', { room_info: results });
    })
});



module.exports = router;
