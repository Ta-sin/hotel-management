const db = require('./db');

module.exports = {

    Dashboard: function (room, callback) {
        var sql = "select * from room_info where uid = '" + room.uid + "'";

        db.getResults(sql, function (status) {
            callback(status);
        });
    },
    DashboardBanquet: function (room, callback) {
        var sql = "select * from banquet_info where uid = '" + room.uid + "'";

        db.getResults(sql, function (status) {
            callback(status);
        });
    }
    // UpdateInfo: function (user, callback) {
    //     var sql = "UPDATE `user` SET `name`='" + user.name + "',`password`='" + user.password + "',`dp`='" + user.dp + "' WHERE `email`='" + user.email + "';";
    //
    //     db.getResults(sql, function (results) {
    //         callback(results);
    //     });
    // }
}
