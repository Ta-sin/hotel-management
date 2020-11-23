const db = require('./db');

module.exports = {

    insert: function(admin, callback) {
        var sql = "INSERT INTO `message`  ( `mname`, `memail`, `mnumber`, `mmessage`, `rid`)  VALUES  ('" + admin.name + "','" + admin.email + "','" + admin.number + "','" + admin.message + "','" + admin.roomid+ "')"
        db.execute(sql, function(status) {
            callback(status);
        });
}
};
