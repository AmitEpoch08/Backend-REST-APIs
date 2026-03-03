const mongoose = require("mongoose");

// Step 1: Create Schema
const productSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  description: {
    type: String
  },

  stock: {
    type: Number,
    default: 0
  }

}, { timestamps: true });

// Step 2: Export Model
module.exports = mongoose.model("Product", productSchema);