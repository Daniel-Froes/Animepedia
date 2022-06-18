var express = require("express");
const vips = require("../controllers/vipsController");
var router = express.Router();

router.get("/", vips.index);

module.exports = router;