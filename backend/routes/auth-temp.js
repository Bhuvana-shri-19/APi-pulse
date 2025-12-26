const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: "User created" });
});

router.post("/signin", async (req, res) => {
  const user = await User.findOne(req.body);
  if (user) res.json({ success: true });
  else res.status(401).json({ success: false });
});

module.exports = router;
