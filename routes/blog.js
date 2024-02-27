var express = require('express');
var router = express.Router();
const blogController = require('../controllers/blog');
const adminController = require('../controllers/admin');

router.post("/adddata", adminController.SECURE, blogController.adddata);

router.get("/alldata", blogController.alldata);

router.delete("/delete/:id", adminController.SECURE, blogController.delete);

router.patch("/update/:id", adminController.SECURE, blogController.update);


module.exports = router;