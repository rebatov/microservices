const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: String,
  registered_date: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    default: 'products'
  }
});

module.exports = mongoose.model('Products', ProductsSchema);