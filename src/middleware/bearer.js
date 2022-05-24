'use strict';

const userCollection = require('../collections/user.collection.js');

module.exports = (req, res, next) => {
  //checks for token
  if (!req.headers.authorization) {
    next('UnAuthorized before');
  } else {
    const token = req.headers.authorization.split(' ').pop();
    userCollection
      .authenticateJWT(token)
      .then((user) => {
        req.user = user;
        next();
      })
      .catch(() => {
        next('unAuthorized');
      });
  }
};
