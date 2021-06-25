const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const responseCheck = require('./api/routes/responsecheck');


app.use('/responseCheck', responseCheck);


app.get('/home', function (req, res) {
    res.send('hello world this is mSpace Number Mask Test');
});

module.exports = app;