import paramCheck from './middlewares/paramCheck'
import verifyPatchBody from './middlewares/verifyPatchBody'

import accessValidation from './middlewares/accessValidation'
import verifyJWT from './middlewares/verifyJWT'

export const middlewares = function(config) {
  this.config = config
}

middlewares.prototype.paramCheck = paramCheck
middlewares.prototype.verifyPatchBody = verifyPatchBody
middlewares.prototype.adminOnly = accessValidation.adminOnly
middlewares.prototype.serverOnly = accessValidation.serverOnly
middlewares.prototype.verifyJWT = verifyJWT

export default middlewares
