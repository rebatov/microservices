const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
  order_id: {
    type: String,
    default: Date.now
  },
  product: {
    type: String, // here will be the product name
    required: true,
  },
  user: {
    type: String, // here will be the user_id
    required: true,
  },
  units: {
    type: Number,
  },
  registered_date: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    default: 'orders'
  }
});

module.exports = mongoose.model('Orders', OrdersSchema);