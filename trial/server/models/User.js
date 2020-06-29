const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  credit: Number,
  createdAt: Date
});

UserSchema.pre('save', async function(next) {
  const user = this;
  if (!user.isModified('password')) return next();

  await bcrypt.hash(user.password, 10);
  next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
