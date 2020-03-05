const express = require('express')
const app = express()

// Forms data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended : true
    }));
app.use(bodyParser.json());

// MongoDB
const mongoose = require('mongoose')
var db = 'mongodb://localhost:27017/NMR';
mongoose.connect(db, function(err) {
    if (err) throw err;
    console.log('Connected to MongoDB');
});

// Routes
const Routes = require('./../routes');
app.use(Routes);

module.exports = app;