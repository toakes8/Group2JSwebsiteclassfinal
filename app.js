const express = require('express');
const bcrypt = require('bcrypt');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const port = 3000;

const uri = 'mongodb+srv://bean:beans01@cluster0.07sxcxy.mongodb.net/Cluster0?retryWrites=true&w=majority';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Hash the password using bcrypt
async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

// Serve the register.html page for GET requests to /register
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.post('/login', async (req, res) => {
  // ... (existing login code)

});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
    const database = client.db('Cluster0');
    const usersCollection = database.collection('users');

    const existingUser = await usersCollection.findOne({ username });

    if (existingUser) {
      // User already exists
      return res.status(409).json({ error: 'Username already taken' });
    }

    const hashedPassword = await hashPassword(password);

    // Create the new user object
    const newUser = { username, password: hashedPassword };

    // Insert the new user into the users collection
    await usersCollection.insertOne(newUser);

    // Close the database connection
    client.close();

    // Return success response
    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
