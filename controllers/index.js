function helloWorld(req, res){
    if (req.header('Authorization')) {
        const token = req.header('Authorization').replace('Bearer ', '');
    }
    const jwt = require('jsonwebtoken');
    require('dotenv').config();
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        console.log(payload._id)
        res.send('Hello World!');
    } catch(error) {
        console.error(error.message)
        res.send('Please login.');
    }
}

function createUser(req, res) {
    const User = require('./../models/user');

    var newUser = new User({
        firstname: req.body.firstname,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
    });

    newUser.save(function(err) {
        if (err) throw err;
        res.json({info: 'Success'});
    });
}

function login(req, res) {
    const User = require('./../models/user');
    require('dotenv').config();

    // find user
    User.findOne({ email: req.body.email }, function(err, user) {
        if (err) throw err;

        // test password
        user.comparePassword(req.body.password, function(err, isMatch) {
            if (err) throw err;
            if (isMatch) {
                const jwt = require('jsonwebtoken');
                console.log(process.env.JWT_SECRET);
                const token = jwt.sign({ _id: user._id, admin: true }, process.env.JWT_SECRET, { expiresIn: '1 week' });
                res.json({info: 'Success', token: token});
            }
            else {
                res.json({info: 'Failure'});
            } 
        });
    });
};

module.exports.helloWorld = helloWorld;
module.exports.createUser = createUser;
module.exports.login = login;