const express = require('express')
const app = express()

app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})


const mongoose = require('mongoose')
User = require('./../models/user')

var db = 'mongodb://localhost:27017/NMR';
mongoose.connect(db, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});

var testUser = new User({
    firstname: 'John',
    surname: 'Smith',
    email: 'john@smith.com',
    password: 'Password123',
});

/* PASSWORD TEST
// save user to database
testUser.save(function(err) {
    if (err) throw err;

    // fetch user and test password verification
    User.findOne({ email: 'john@smith.com' }, function(err, user) {
        if (err) throw err;

        // test a matching password
        user.comparePassword('Password123', function(err, isMatch) {
            if (err) throw err;
            console.log('Password123:', isMatch); // -> Password123: true
        });

        // test a failing password
        user.comparePassword('123Password', function(err, isMatch) {
            if (err) throw err;
            console.log('123Password:', isMatch); // -> 123Password: false
        });
    });
});
*/

module.exports = app