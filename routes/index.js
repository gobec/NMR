const router = require('express').Router();
const controller = require('../controllers');

router.get('/', function (req, res) {
    res.send('Hello World!')
  });

router.post('/user', (req, res) => {
    controller.createUser(req, res);
});

router.post('/login', (req, res) => {
    controller.login(req, res);
});

module.exports = router;