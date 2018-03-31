'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createJWToken = exports.verifyJWTToken = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const verifyJWTToken = exports.verifyJWTToken = (config, token) => {
  return _jsonwebtoken2.default.verify(token, config.JWT_SECRET);
};

const createJWToken = exports.createJWToken = (config, details) => {
  return _jsonwebtoken2.default.sign(details.data, config.JWT_SECRET, {
    expiresIn: details.maxAge,
    algorithm: 'HS256'
  });
};

exports.default = {
  verifyJWTToken,
  createJWToken
};