import paramCheck from './middlewares/paramCheck'
import verifyPatchBody from './middlewares/verifyPatchBody'

import adminOnly from './middlewares/adminOnly'
import verifyJWT from './middlewares/verifyJWT'

export const middlewares = function(config) {
  this.config = config
}

middlewares.prototype.paramCheck = paramCheck
middlewares.prototype.verifyPatchBody = verifyPatchBody
middlewares.prototype.adminOnly = adminOnly
middlewares.prototype.verifyJWT = verifyJWT

export default middlewares
