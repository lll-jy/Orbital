const express = require("express");
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const newUser = User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    createdAt: Date.now()
  });

  await newUser.save();
  res.sendStatus(201);
});

module.exports = router;
