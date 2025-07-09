const express = require('express');
const { default: serverlessExpress } = require('@vendia/serverless-express');
const cors = require('cors');
require('dotenv').config();

const noteRoutes = require('../routes/noteRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/notes', noteRoutes);

app.get('/', (req, res) => {
  res.send('Notes App Backend running on Vercel 🎉');
});

module.exports = serverlessExpress({ app });
