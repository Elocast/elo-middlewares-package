import jwt from "jsonwebtoken"

export const verifyJWTToken = (config, token) => {
  return jwt.verify(token, config.JWT_SECRET)
}

export const createJWToken = (config, details) => {
  return jwt.sign(details.data, config.JWT_SECRET, {
    expiresIn: details.maxAge,
    algorithm: "HS256"
  })
}

export default {
  verifyJWTToken,
  createJWToken
}
