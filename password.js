const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
const { hashPassword } = require('../utils/password');

const uri = 'mongodb+srv://<username>:<password>@<cluster-url>/test?retryWrites=true&w=majority'; // Replace with your connection string
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas', error);
  }
}

connectToDatabase();

// User registration route
router.post('/register', async (req, res) => {
  // User registration logic here
});

module.exports = router;
