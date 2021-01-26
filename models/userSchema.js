module.exports = function (db, cb) {
    db.load("./cabSchema", function (err) {
      if (err) {
        return cb(err);
      }
  
      db.define('user', {
		id:Number,
        name : String,
        lat : Number,
        lon : Number,
        in_ride : Boolean,
      });
  
      return cb();
    });
  };