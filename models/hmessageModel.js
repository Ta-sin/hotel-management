const db = require('./db');
module.exports = {

    Message: function(callback) {
        var sql = "select * from message";
        db.getResults(sql, function(results) {
          callback(results);

        });
    }

}
