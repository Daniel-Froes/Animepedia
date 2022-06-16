var express = require("express");
const criarPost = require("../controllers/criarPostController");
var router = express.Router();

router.get("/", criarPost.index);

module.exports = router;
