const db = require('./db');

module.exports = {

    insert: function(admin, callback) {
        var sql = "INSERT INTO `room_info`(`rid`, `rname`, `rprice`, `rdescription`, `rdp`,`uid`) VALUES  ('" + admin.rid + "','" + admin.rname + "','" + admin.rprice + "','" + admin.rdescrription + "','" + admin.rdp+ "','"+admin.uid+"')"

        db.execute(sql, function(status) {
            callback(status);
        });
}
};
