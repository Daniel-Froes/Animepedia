var express = require("express");
const aprovar = require("../controllers/aprovarController");
var router = express.Router();

router.get("/", aprovar.index);

module.exports = router;