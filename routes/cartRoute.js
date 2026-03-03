const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

// CREATE CART
router.post("/", cartController.createCart);

// GET ALL CARTS
router.get("/", cartController.getCarts);

module.exports = router;