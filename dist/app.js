'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.middlewares = undefined;

var _paramCheck = require('./middlewares/paramCheck');

var _paramCheck2 = _interopRequireDefault(_paramCheck);

var _verifyPatchBody = require('./middlewares/verifyPatchBody');

var _verifyPatchBody2 = _interopRequireDefault(_verifyPatchBody);

var _adminOnly = require('./middlewares/adminOnly');

var _adminOnly2 = _interopRequireDefault(_adminOnly);

var _verifyJWT = require('./middlewares/verifyJWT');

var _verifyJWT2 = _interopRequireDefault(_verifyJWT);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const middlewares = exports.middlewares = function (config) {
  this.config = config;
};

middlewares.prototype.paramCheck = _paramCheck2.default;
middlewares.prototype.verifyPatchBody = _verifyPatchBody2.default;
middlewares.prototype.adminOnly = _adminOnly2.default;
middlewares.prototype.verifyJWT = _verifyJWT2.default;

exports.default = middlewares;