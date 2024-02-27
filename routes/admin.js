var express = require('express');
var router = express.Router();
const adminController = require('../controllers/admin')

router.post("/add", adminController.SIGNUP);

router.post("/login", adminController.LOGIN);

router.get("/all", adminController.SECURE, adminController.alldata);


module.exports = router;
