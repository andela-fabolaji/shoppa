const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: {
    type: String,
    required: [true, 'shop name is required']
  }
});

module.exports = mongoose.model('Shop', shopSchema);