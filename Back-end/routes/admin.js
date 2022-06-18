var express = require("express");
const admin = require("../controllers/adminController");
var router = express.Router();


router.get('/vips', admin.vips);
router.get('/usuarios', admin.users);
router.get('/criarPost', admin.post);
router.get('/aprovar', admin.aprove);
router.get("/", admin.index);

module.exports = router;
