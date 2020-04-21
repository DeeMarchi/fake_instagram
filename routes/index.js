const express = require('express');
const router = express.Router();

const IndexController = require('../controllers/IndexController');

router.get('/', IndexController.login);
router.post('/', IndexController.logar);

router.get('/registro', IndexController.registro);
router.post('/registro', IndexController.registrar);

router.get('/home', IndexController.home);

module.exports = router;
