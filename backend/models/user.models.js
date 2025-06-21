import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, requred: true },
  profilePic: { type: String },
})

const userModels = mongoose.model('User', userSchema)

export default userModels
