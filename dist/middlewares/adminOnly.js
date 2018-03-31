'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const adminOnly = function (req, res, next) {
  if (req.user.access > 0) {
    return next();
  }

  res.status(403).json({
    message: 'Insuficient permissions'
  });
};

exports.default = adminOnly;