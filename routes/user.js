const express = require('express'),
      router = express.Router(),
      userController = require('../controllers/userController')();


router.get('/info',userController.userinfo)

module.exports = router;
