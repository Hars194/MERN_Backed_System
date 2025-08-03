const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  rate: Number
});
module.exports = mongoose.model('Item', itemSchema);