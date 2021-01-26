require('dotenv').config()
const orm = require('orm');

module.exports = orm.express(process.env.MYSQL_DB_URL, {
    define: function (db, models) {

		db.load("./userSchema", function (err) {
			// loaded!
			models.user = db.models.user;
			models.cab =  db.models.cab;
			models.cab_history = db.models.cab_history;	

		  });
	
	 	
	}
});


