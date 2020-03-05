const router = require('express').Router();
const controller = require('../controllers');

router.get('/', function (req, res) {
    controller.helloWorld(req, res);
});

router.post('/user', (req, res) => {
    controller.createUser(req, res);
});

router.get('/login', (req, res) => {
    controller.login(req, res);
});

module.exports = router;