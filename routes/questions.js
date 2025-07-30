const express = require("express");
const { getQuestionsBySubject } = require("../controllers/questionController");
const router = express.Router();

router.get("/:subject", getQuestionsBySubject);

module.exports = router;
