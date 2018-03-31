import { verifyJWTToken } from "../libs/auth"

const verifyJWT = required => {
  return (req, res, next) => {
    try {
      const token = req.headers["x-access-token"]
      req.user = verifyJWTToken(this.config, token)
      next()
    } catch (e) {
      if (required) {
        return res.status(401).json({
          message: "Invalid access token provided."
        })
      }

      req.user = {}
      next()
    }
  }
}

export default verifyJWT