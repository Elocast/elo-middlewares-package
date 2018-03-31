'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const paramCheck = function (list) {
  return (req, res, next) => {
    const missingParams = list.filter(item => {
      // split if possible - if not, create new array
      const _item = item.includes(':') ? item.split(':') : [item, 'query'];
      return !(0, _keys2.default)(req[_item[1]]).includes(_item[0]);
    });

    if (missingParams.length > 0) {
      return res.status(400).json({
        message: `Missing arguments (${missingParams[0]})`
      });
    }

    next();
  };
};

exports.default = paramCheck;