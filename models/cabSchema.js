module.exports = function (db, cb) {
    db.define('cab', {
        name : String,
        lat : Number,
        lon : Number,
        available : Boolean,
    });

    db.define('cab_history', {
        cab_id : Number,
        status : String,
        booked_datetime : {type: 'date', time: true },
    });
	

  
    return cb();
  };