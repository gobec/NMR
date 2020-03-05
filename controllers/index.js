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

    // find user
    User.findOne({ email: req.body.email }, function(err, user) {
        if (err) throw err;

        // test password
        user.comparePassword(req.body.password, function(err, isMatch) {
            if (err) throw err;
            if (isMatch) {
                res.json({info: 'Success'});
            }
            else {
                res.json({info: 'Failure'});
            } 
        });
    });
};

module.exports.createUser = createUser;
module.exports.login = login;