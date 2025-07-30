require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("./models/Question");

const questions = [
  // MATHS
  {
    subject: "Maths",
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    subject: "Maths",
    question: "What is the square root of 16?",
    options: ["2", "4", "6", "8"],
    correctAnswer: "4",
  },
  {
    subject: "Maths",
    question: "Simplify: 3x + 2x",
    options: ["5x", "6x", "3x", "2x"],
    correctAnswer: "5x",
  },
  {
    subject: "Maths",
    question: "What is 10% of 200?",
    options: ["10", "20", "30", "40"],
    correctAnswer: "20",
  },
  {
    subject: "Maths",
    question: "What is the value of π (Pi) to 2 decimal places?",
    options: ["3.12", "3.14", "3.16", "3.18"],
    correctAnswer: "3.14",
  },

  // PHYSICS
  {
    subject: "Physics",
    question: "What is the unit of force?",
    options: ["Newton", "Joule", "Pascal", "Watt"],
    correctAnswer: "Newton",
  },
  {
    subject: "Physics",
    question: "Speed is equal to?",
    options: [
      "Distance × Time",
      "Distance / Time",
      "Time / Distance",
      "Mass / Volume",
    ],
    correctAnswer: "Distance / Time",
  },
  {
    subject: "Physics",
    question: "Light travels fastest in?",
    options: ["Water", "Glass", "Air", "Vacuum"],
    correctAnswer: "Vacuum",
  },
  {
    subject: "Physics",
    question: "What instrument measures temperature?",
    options: ["Thermometer", "Barometer", "Ammeter", "Voltmeter"],
    correctAnswer: "Thermometer",
  },
  {
    subject: "Physics",
    question: "What is the SI unit of power?",
    options: ["Joule", "Watt", "Volt", "Ohm"],
    correctAnswer: "Watt",
  },

  // CHEMISTRY
  {
    subject: "Chemistry",
    question: "What is H₂O?",
    options: ["Hydrogen", "Oxygen", "Water", "Acid"],
    correctAnswer: "Water",
  },
  {
    subject: "Chemistry",
    question: "Which gas do plants absorb?",
    options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
    correctAnswer: "Carbon dioxide",
  },
  {
    subject: "Chemistry",
    question: "What is the chemical symbol for Sodium?",
    options: ["S", "So", "Na", "N"],
    correctAnswer: "Na",
  },
  {
    subject: "Chemistry",
    question: "Which of these is a noble gas?",
    options: ["Oxygen", "Helium", "Nitrogen", "Hydrogen"],
    correctAnswer: "Helium",
  },
  {
    subject: "Chemistry",
    question: "What is the pH of a neutral solution?",
    options: ["7", "0", "14", "1"],
    correctAnswer: "7",
  },

  // BIOLOGY
  {
    subject: "Biology",
    question: "What is the basic unit of life?",
    options: ["Tissue", "Organ", "Cell", "Organism"],
    correctAnswer: "Cell",
  },
  {
    subject: "Biology",
    question: "Which organ pumps blood?",
    options: ["Brain", "Liver", "Heart", "Lungs"],
    correctAnswer: "Heart",
  },
  {
    subject: "Biology",
    question: "Which part of the plant makes food?",
    options: ["Root", "Stem", "Leaf", "Flower"],
    correctAnswer: "Leaf",
  },
  {
    subject: "Biology",
    question: "Humans have how many chromosomes?",
    options: ["23", "46", "48", "22"],
    correctAnswer: "46",
  },
  {
    subject: "Biology",
    question: "What gas do we inhale to breathe?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Oxygen",
  },

  // GEOGRAPHY
  {
    subject: "Geography",
    question: "What is the capital of Nigeria?",
    options: ["Lagos", "Abuja", "Kano", "Ibadan"],
    correctAnswer: "Abuja",
  },
  {
    subject: "Geography",
    question: "Which is the largest ocean?",
    options: ["Atlantic", "Pacific", "Indian", "Arctic"],
    correctAnswer: "Pacific",
  },
  {
    subject: "Geography",
    question: "The Sahara is found in which continent?",
    options: ["Asia", "Africa", "Europe", "America"],
    correctAnswer: "Africa",
  },
  {
    subject: "Geography",
    question: "Mount Everest is found in?",
    options: ["Nepal", "India", "China", "Pakistan"],
    correctAnswer: "Nepal",
  },
  {
    subject: "Geography",
    question: "What is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correctAnswer: "Nile",
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Question.deleteMany({});
    await Question.insertMany(questions);
    console.log("✅ Questions seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding questions:", err);
    process.exit(1);
  }
};

seedDB();
