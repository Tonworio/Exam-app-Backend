require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors({
  origin: [
    'https://exam-app-frontend-tau.vercel.app',
    'https://exam-app-frontend-1lf3d41e3-tonworios-projects.vercel.app',
    'https://exam-app-frontend-6a0xez3hi-tonworios-projects.vercel.app' 
  ]
}));


app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/questions", require("./routes/questions"));
app.use("/api/home", require("./routes/home"));

// ✅ Root route for browser test
app.get("/", (req, res) => {
  res.send("Welcome to the Exam Preparation App Backend");
});

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    app.listen(process.env.PORT, () =>
      console.log(`🚀 Server running on port ${process.env.PORT}`)
    );
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

startServer();







