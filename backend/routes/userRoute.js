

const express = require("express");
const User = require("../models/userModel");
const router = express.Router();

// Get All Users
router.get("/", async (req, res) => {
  try {
    const showAll = await User.find();
    res.status(200).json(showAll); // Send all users with status 200
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(400).json({ error: error.message }); // Correct status and message
  }
});

// Get a Single User by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findById(id); // Simplify the query
    if (!singleUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(singleUser);
  } catch (error) {
    console.error("Error fetching user:", error.message);
    res.status(400).json({ error: error.message });
  }
});

// Delete a User by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await User.findByIdAndDelete(id); // Simplify query
    if (!deleteUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully", deleteUser });
  } catch (error) {
    console.error("Error deleting user:", error.message);
    res.status(400).json({ error: error.message });
  }
});

// Update a User by ID
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Validate updates
    });
    if (!updateUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updateUser);
  } catch (error) {
    console.error("Error updating user:", error.message);
    res.status(400).json({ error: error.message });
  }
});

// Create a New User
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;

  // Validate inputs
  if (!name || !email || !age) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const userAdded = await User.create({ name, email, age });
    res.status(201).json(userAdded);
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
