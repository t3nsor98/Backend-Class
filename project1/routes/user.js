const express = require("express");


const router = express.Router();

router.get("/api/users", (req, res) => {
  return res.json(users);
});

router.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id == id);
  return res.json(user);
});

// create new user
router.post("/api/users", (req, res) => {
  const { first_name, last_name, email, gender } = req.body;

  if (!first_name || !last_name || !email || !gender) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newUser = {
    id: users.length + 1, // Simple ID assignment (better to use UUID in real projects)
    first_name,
    last_name,
    email,
    gender,
  };

  users.push(newUser);
  return res.status(201).json(newUser);
});

module.exports = router;