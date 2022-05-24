'use strict';

const express = require('express');
const router = express.Router();
const BasicAuthMW = require('../middleware/basicAuth');
const user = require('../collections/user.collection.js');

router.post('/signup', signupHandler);
router.post('/signin', BasicAuthMW, signinHandler);

function signupHandler(req, res) {
  user.createHash(req.body)
  .then((data) => {
    const token = user.generateToken(data);
    res.json({ token, data });
  });
}

function signinHandler(req, res) {
  res.json({ token: req.token });
}

module.exports = router;
