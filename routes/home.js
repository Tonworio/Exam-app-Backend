// backend/routes/home.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the Exam Preparation App API" });
});

module.exports = router;
