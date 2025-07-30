const Question = require("../models/Question");

exports.getQuestionsBySubject = async (req, res) => {
  const { subject } = req.params;
  const questions = await Question.find({ subject }).limit(5);
  res.json(questions);
};
