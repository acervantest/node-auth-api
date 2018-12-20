const express = require('express');
const router = express.Router();

//Register
router.get('/register', (req, res, next) => {
    res.send('REGISTER ENDPOINT');
});

//Authenticate
router.get('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE ENDPOINT');
});

//Profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE ENDPOINT');
});

//Validate
router.get('/validate', (req, res, next) => {
    res.send('VALIDATE ENDPOINT');
});

module.exports = router;