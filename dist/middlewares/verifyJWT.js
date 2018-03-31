'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _auth = require('../libs/auth')

const verifyJWT = required => {
  return (req, res, next) => {
    try {
      const token = req.headers['x-access-token']
      req.user = (0, _auth.verifyJWTToken)(undefined.config, token)
      next()
    } catch (e) {
      if (required) {
        return res.status(401).json({
          message: 'Invalid access token provided.'
        })
      }

      req.user = {}
      next()
    }
  }
}

exports.default = verifyJWT
