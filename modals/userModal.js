const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  password: String,
  date: Date,
  phoneNumber:Number,
  accessToken: String,
  deviceToken: String,
});

module.exports = mongoose.model('User', userSchema,'users');