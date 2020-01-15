const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const sharePostSchema = new Schema({
  image: String,
  comments: String,
  userName: String,
  email: String,
  password: String,
  date: Date,
  phoneNumber:Number,
  accessToken: String,
  deviceToken: String,
});

module.exports = mongoose.model('sharePost', sharePostSchema,'sharePost');