const adminOnly = (req, res, next) => {
  if (req.user.access > 0) {
    return next()
  }

  res.status(403).json({
    message: "Insuficient permissions"
  })
}

export default adminOnly