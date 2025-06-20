import JWT from 'jsonwebtoken'

export const generateToken = (userId) => {
  return JWT.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

export const verifyToken = (token) => {
  return JWT.verify(token, process.env.JWT_SECRET)
}
