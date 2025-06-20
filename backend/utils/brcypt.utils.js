import brcypt from 'bcryptjs'

export const hashPassword = async (password) => {
  const salt = await brcypt.genSalt(10)
  return await brcypt.hash(password, salt)
}

export const comparePassword = async (password, hashedPassword) => {
  return await brcypt.compare(password, hashedPassword)
}
