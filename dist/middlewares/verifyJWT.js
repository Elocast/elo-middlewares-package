'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _auth = require('../libs/auth');

const verifyJWT = function (required) {
  return (req, res, next) => {
    try {
      const token = req.headers['x-access-token'];
      req.user = (0, _auth.verifyJWTToken)(this.config, token);
      next();
    } catch (e) {
      if (required) {
        return res.status(401).json({
          message: 'Invalid access token provided.'
        });
      }

      req.user = {};
      next();
    }
  };
};

exports.default = verifyJWT;