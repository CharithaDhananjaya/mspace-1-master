const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', (req, res, next) => {
    axios.post('http://104.215.147.207:10787/responsecheck/log', {
        body: req.body,
        data: req.data,
        message: "Success"
    })
    .then(response=>{
        res.status(200).json({
            message: response
        });
    })
    .catch(err=>{
        console.log(err);
    });
});

router.post('/log', (req, res, next) => {
    console.log(req.body);
    console.log(req.data);
    res.status(200).json({
        message: "Success 123"
    });
});

module.exports = router;