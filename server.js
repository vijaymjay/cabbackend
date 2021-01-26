const express = require('express'),
// path = require('path'),
 favicon = require('static-favicon'),
 logger = require('morgan'),
 dotenv = require('dotenv'),
// bodyparser = require('body-parser'),
 //expressValidator = require('express-validator'),
 cab = require('./routes/cab'),
 user = require('./routes/user'),
 cors = require("cors"),
 noladb = require('./models/nola');
 dotenv.config();
 

var app = express();

app.use(noladb);	
app.use(cors());

app.use(favicon());
app.use(logger('dev'));

//app.use(bodyparser.json());
//app.use(bodyparser.urlencoded({ extended: true }));

//app.use(express.static(path.join(__dirname,'public')));

app.use('/',cab);
app.use('/user',user)

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({status:err})
  return;
});

process.on('unhandledRejection', (reason, p) => {
	console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

app.listen(process.env.PORT, () => {
    console.log(`Express server started at port : ${process.env.PORT}`);
});