var express = require('express');
const controller = require('../controllers/categoriasController')
var router = express.Router();


router.get('/:id', controller.show);
router.get('/', controller.index);

module.exports = router;
