var express = require("express");
const admin = require("../controllers/adminController");
var router = express.Router();

router.get("/", admin.index);

module.exports = router;
