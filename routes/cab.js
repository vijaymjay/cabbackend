const express = require('express'),
      router = express.Router(),
      cabController = require('../controllers/cabController')();


router.put('/book/:cab_id',  cabController.bookCabById);
router.put('/unbook/:cab_id',  cabController.unbookCabById);
router.get('/cabs',cabController.cabList);
router.get('/rides/:cab_id',cabController.getCabHistory)

module.exports = router;
