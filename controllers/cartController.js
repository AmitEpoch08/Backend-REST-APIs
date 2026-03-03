const Cart = require("../models/Cart");

// CREATE CART
exports.createCart = async (req, res) => {
  try {
    const cart = new Cart(req.body);
    const savedCart = await cart.save();
    res.status(201).json(savedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET CARTS (with population)
exports.getCarts = async (req, res) => {
  try {
    const carts = await Cart.find()
      .populate("user")
      .populate("products.product");

    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};