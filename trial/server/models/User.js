const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  createdAt: Date,
  credit: Number
});

UserSchema.pre('save', async next => {
  const user = this;
  if (!user.isModified("password")) return next();

  const isEqual = await bcrypt.hash(user.password, 10);
  next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
