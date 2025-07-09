// /api/index.js

const express = require("express");
const serverlessExpress = require("@vendia/serverless-express");

const app = express();

// Example route
app.get("/", (req, res) => {
  res.send("✅ Notes API is working on Vercel Serverless!");
});

// You can add more routes like this
app.get("/notes", (req, res) => {
  res.json([
    { id: 1, title: "First Note" },
    { id: 2, title: "Second Note" }
  ]);
});

// Export the handler for Vercel
module.exports = serverlessExpress({ app });
