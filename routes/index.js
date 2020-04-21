const express = require('express');
const router = express.Router();

const IndexController = require('../controllers/IndexController');

router.get('/', IndexController.login);

router.get('/registro', IndexController.registro);

router.get('/home', IndexController.home);

module.exports = router;
