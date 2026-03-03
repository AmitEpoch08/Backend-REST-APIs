const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// CREATE USER
router.post("/", userController.createUser);

// GET ALL USERS
router.get("/", userController.getAllUsers);

module.exports = router;