const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  firstName: String,
  lastName: String,
  address: String,
  email: String,
  phone: String,
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  registered_date: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    default: 'users'
  }
});

module.exports = mongoose.model('Users', UsersSchema);