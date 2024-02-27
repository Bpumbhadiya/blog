var express = require('express');
var router = express.Router();
const catagoryController = require('../controllers/catagory');
const adminController = require('../controllers/admin');

router.post("/adddata", adminController.SECURE, catagoryController.add);

router.get("/alldata", catagoryController.all);

router.delete("/delete/:id", adminController.SECURE, catagoryController.deldata);

router.patch("/updat/:id", adminController.SECURE, catagoryController.updatdata);

module.exports = router;