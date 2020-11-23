const db = require('./db');

module.exports = {

  Rooms: function(callback) {
      var sql = "select * from room_info";
      db.getResults(sql, function(results) {
        callback(results);
          // if (results.length > 0) {
          //     callback(true);
          // } else {
          //     callback(false);
          // }
      });
  }
}
