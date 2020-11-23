const express = require('express');
const dashboardModel = require.main.require('./models/dashboardModel');
const router = express.Router();

var msg = "";

router.get('/', (req, res) => {
    var room = {
        uid: req.session.uid
    };
    dashboardModel.Dashboard(room, function(results) {
        console.log(results);
        var roominfo = results;
        dashboardModel.DashboardBanquet(room,function(banquet){
          res.render('dashboard', { room: roominfo , banquet: banquet});
        })

    })
});



module.exports = router;
