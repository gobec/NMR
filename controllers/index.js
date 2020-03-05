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

module.exports.createUser = createUser;