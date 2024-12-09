const mongoose = require('mongoose');

const urunSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  product_price: { type: Number, required: true },
  product_image: { type: String, required: true } // Dosya adını kaydetmek için
});

module.exports = mongoose.model('Product', urunSchema, 'product');
