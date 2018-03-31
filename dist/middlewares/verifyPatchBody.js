'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
const verifyPatchBody = (list = []) => {
  return (req, res, next) => {
    if (!req.body.op) {
      return res.status(400).json({
        message: 'Missing body arguments (op)'
      })
    }

    if (list.length < 1) {
      return next()
    }

    if (!list.includes(req.body.op)) {
      return res.status(403).json({
        message: 'Operation not supported'
      })
    }

    switch (req.body.op) {
      case 'remove':
      case 'replace':
      {
        if (!req.body.path) {
          return res.status(400).json({
            message: 'Missing body arguments (path)'
          })
        }
        req.body.path = req.body.path.replace('/', '')
      }
      case 'replace':
      {
        if (!req.body.value) {
          return res.status(400).json({
            message: 'Missing body arguments (value)'
          })
        }
      }
    }

    next()
  }
}

exports.default = verifyPatchBody
