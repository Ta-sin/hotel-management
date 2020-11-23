const db = require('./db');

module.exports = {

    insert: function(admin, callback) {
        var sql = "INSERT INTO `banquet_info`(`bid`, `bname`, `bprice`, `bdescription`, `bdp`) VALUES  ('" + admin.bid + "','" + admin.bname + "','" + admin.bprice + "','" + admin.bdescrription + "','" + admin.bdp+ "')"

        db.execute(sql, function(status) {
            callback(status);
        });
}
};
